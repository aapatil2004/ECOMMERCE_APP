package com.aryan.Project.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aryan.Project.Model.Product;
import com.aryan.Project.Model.Payment; // Import PaymentRequest model
import com.aryan.Project.Service.PaymentService;
import com.aryan.Project.Service.ProductService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService service;

    @Autowired
    private PaymentService paymentService;

    @RequestMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable int id) {
        Product prod = service.getProductById(id);
        if (prod != null)
            return new ResponseEntity<>(prod, HttpStatus.OK);
        else
            return new ResponseEntity<>(prod, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) {
        try {
            Product product1 = service.addProduct(product, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/product/{productId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable int productId) {
        Product product = service.getProductById(productId);
        byte[] imageFile = product.getImageDate();
        return ResponseEntity.ok().body(imageFile);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Product product,
            @RequestPart MultipartFile imageFile) {
        Product product1;
        try {
            product1 = service.updateProduct(id, product, imageFile);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to update", HttpStatus.BAD_REQUEST);
        }
        if (product1 != null)
            return new ResponseEntity<>("Updated", HttpStatus.OK);
        else
            return new ResponseEntity<>("Failed to update", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) {
        Product product = service.getProductById(id);
        if (product != null) {
            service.deleteProduct(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        } else
            return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword) {
        List<Product> products = service.searchProducts(keyword);
        System.out.println("searching with " + keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // New endpoint to handle payment processing
    // @PostMapping("/product/{id}/purchase")
    // public ResponseEntity<?> purchaseProduct(@PathVariable int id, @RequestBody
    // Payment paymentRequest) {
    // String clientSecret = service.processPayment(paymentRequest.getAmount(),
    // paymentRequest.getCurrency());
    // if (clientSecret != null) {
    // return ResponseEntity.ok(clientSecret); // Send the clientSecret back to the
    // // client
    // } else {
    // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Payment
    // processing failed");
    // }
    // }

    @PostMapping("/product/{id}/purchase")
    public ResponseEntity<String> purchaseProduct(@PathVariable Long id, @RequestBody Payment paymentRequest) {
        // Make sure to pass all required parameters
        String paymentUrl = paymentService.processPayment(
                paymentRequest.getAmount(),
                paymentRequest.getCurrency(),
                "Product Purchase", // Product info
                paymentRequest.getCustomerEmail(), // This is already defined
                paymentRequest.getCustomerName(), // Assuming you added this field
                paymentRequest.getCustomerPhone()); // Assuming you added this field
        System.out.println(paymentUrl);
        if (paymentUrl != null) {
            // System.out.println("WORKING FINE");
            return ResponseEntity.ok(paymentUrl); // Send the payment URL back to frontend
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Payment processing failed");
        }
    }

    @GetMapping("/payment/success")
    public String paymentSuccess() {
        // Handle payment success logic (e.g., updating order status)
        return "Payment was successful!";
    }

    @GetMapping("/payment/failure")
    public String paymentFailure() {
        // Handle payment failure logic
        return "Payment failed. Please try again.";
    }

}
