package com.aryan.Project.Model;

import java.math.BigDecimal;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // it is lombok annotation that provides you with all the common methods
      // automatically(toString , equals(),
      // hashCode())
@AllArgsConstructor // creates parameterized constructor
// public Product(int id, String name, String desc, String brand, BigDecimal
// price, String category, Date releaseDate, boolean available, int quantity)
@NoArgsConstructor // creates default constructor Product()
@Entity // (Java Persistence API (JPA)) tells that the given class is used as
        // relation(table in database) object relation model
public class Product {
    @Id // tels that id is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // used for autoincrement and allocate the unique id
    private Integer id;
    private String name;
    private String description;
    private String brand;
    private BigDecimal price;
    private String category;
    private Date releaseDate;
    private boolean productAvailable;
    private int stockQuantity;

    private String imageName;
    private String imageType;

    @Lob // For large objects
    private byte[] imageDate;

}
