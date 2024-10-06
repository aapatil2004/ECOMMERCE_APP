package com.aryan.Project.Service;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class PaymentService {

    @Value("${payu.key}")
    private String merchantKey;

    @Value("${payu.salt}")
    private String merchantSalt;

    @Value("${payu.testUrl}")
    private String payuTestUrl;

    public String processPayment(long amount, String currency, String productInfo, String customerEmail,
            String customerName, String customerPhone) {
        // Generate unique transaction ID using UUID for better uniqueness
        String txnid = UUID.randomUUID().toString();

        // Hash calculation using key, transaction details, and salt
        String hash = generateHash(merchantKey, txnid, amount, productInfo, customerEmail, merchantSalt);

        // Payment parameters for PayU
        Map<String, String> params = new HashMap<>();
        params.put("key", merchantKey);
        params.put("txnid", txnid);
        params.put("amount", String.valueOf(amount));
        params.put("productinfo", productInfo);
        params.put("firstname", customerName); // Fetch customer name
        params.put("email", customerEmail); // Fetch customer email
        params.put("phone", customerPhone); // Fetch customer phone
        params.put("surl", "http://localhost:8080/payment/success"); // Success URL
        params.put("furl", "http://localhost:8080/payment/failure"); // Failure URL
        params.put("hash", hash);

        // Construct URL to redirect to PayU (test mode)
        StringBuilder url = new StringBuilder(payuTestUrl);
        url.append("?");
        params.forEach((k, v) -> {
            try {
                url.append(URLEncoder.encode(k, StandardCharsets.UTF_8.toString())).append("=")
                        .append(URLEncoder.encode(v, StandardCharsets.UTF_8.toString())).append("&");
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        // Remove the last '&'
        if (url.charAt(url.length() - 1) == '&') {
            url.deleteCharAt(url.length() - 1);
        }

        return url.toString(); // Send this URL to the frontend
    }

    private String generateHash(String key, String txnid, long amount, String productInfo, String customerEmail,
            String salt) {
        // Hash generation logic based on PayU requirements
        String hashString = key + "|" + txnid + "|" + amount + "|" + productInfo + "|" + customerEmail + "|||||||||||"
                + salt;
        return DigestUtils.sha512Hex(hashString); // Use SHA-512
    }
}
