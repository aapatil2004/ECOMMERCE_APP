package com.aryan.Project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.aryan.Project.Model.Payment; // Assuming you have a Payment model

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long> {
    // You can define custom query methods here if needed
}
