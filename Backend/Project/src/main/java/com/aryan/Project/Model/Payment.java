package com.aryan.Project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long amount;
    private String currency;
    private String paymentStatus; // e.g., SUCCESS, FAILED, PENDING
    private String customerEmail; // Field for customer email
    private String customerName; // New field for customer name
    private String customerPhone; // New field for customer phone

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getCustomerEmail() {
        return customerEmail; // Getter for customer email
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail; // Setter for customer email
    }

    public String getCustomerName() { // Getter for customer name
        return customerName;
    }

    public void setCustomerName(String customerName) { // Setter for customer name
        this.customerName = customerName;
    }

    public String getCustomerPhone() { // Getter for customer phone
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) { // Setter for customer phone
        this.customerPhone = customerPhone;
    }
}
