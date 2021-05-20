package com.logigear.training;

import static org.assertj.core.api.Assertions.in;
import static org.mockito.Mockito.times;

import com.logigear.training.mapper.EmployeeMapper;
import org.apiguardian.api.API;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;

import com.logigear.training.controller.EmployeeController;
import com.logigear.training.mapper.EmployeeMapperImpl;
import com.logigear.training.model.Employee;
import com.logigear.training.repository.EmployeeRepository;
import com.logigear.training.service.EmployeeService;

import reactor.core.publisher.Mono;

@ExtendWith({SpringExtension.class, MockitoExtension.class})
@WebFluxTest(controllers = {EmployeeController.class})
@Import(value = {EmployeeService.class, EmployeeMapperImpl.class})
public class EmployeeControllerTest {
    private static final String API_URL = "/api/v1/employees/";

    @MockBean
    private EmployeeRepository repository;

    @Autowired
    private WebTestClient webClient;

    @Test
    public void testCreateEmployee() {
        Employee emp = new Employee();
        emp.setUsername("user");
        emp.setFullname("John Doe the User");
        emp.setRole("User");

        webClient.post()
                .uri(API_URL)
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(emp))
                .exchange()
                .expectStatus().isCreated();

    }

    @Test
    public void testDeleteAnEmployee() {
        String username = "admin";
        repository.deleteByUsername(username)
                .map(e -> webClient.delete()
                        .uri(API_URL + username)
                        .exchange()
                        .expectStatus().isOk()).subscribe();
    }
    @Test
    public void testUpdateEmployee() {
        String username = "user";
        String updateFullname = "BangMaple the User";
        repository.findByUsername(username).map(e -> {
            System.out.println(e);
            e.setFullname(updateFullname);
            return e;
        }).map(e -> webClient.patch()
                .uri(API_URL + username)
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(e))
                .exchange()
                .expectStatus().isOk()).subscribe();

    }

}
