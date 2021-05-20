package com.logigear.training;

import com.logigear.training.model.Employee;
import com.logigear.training.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.r2dbc.connection.init.CompositeDatabasePopulator;
import org.springframework.r2dbc.connection.init.ConnectionFactoryInitializer;
import org.springframework.r2dbc.connection.init.ResourceDatabasePopulator;

import io.r2dbc.spi.ConnectionFactory;

import java.util.Arrays;

@Configuration
public class H2DatabaseInitializer {
    @Bean
    public ConnectionFactoryInitializer initializer(ConnectionFactory connectionFactory) {
        ConnectionFactoryInitializer initializer = new ConnectionFactoryInitializer();
        initializer.setConnectionFactory(connectionFactory);
        CompositeDatabasePopulator populator = new CompositeDatabasePopulator();
        populator.addPopulators(new ResourceDatabasePopulator(new ClassPathResource("data.sql")));
        initializer.setDatabasePopulator(populator);
        return initializer;
    }

    @Bean
    public CommandLineRunner demo(EmployeeRepository repository) {
        return (args -> {
           repository.saveAll(Arrays.asList(
                   new Employee("admin", "admin", "BangMaple the Administrator","Administrator"),
                   new Employee("user", "user", "BangMaple the User","User")

           ));
        });
    }
}
