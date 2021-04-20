# 1. Spring Fundamentals

## Tools
+ Eclise
    + need install *lombok* addin to understand lombok code: https://projectlombok.org/p2
    + addon: Spring Tool Suite 
+ Spring Initializr
+ JDK, Maven
+ VSCode


## Design concept
+ IoC vs DI pattern
+ Aspect Oriented Programming (AOP)
+ Modular design
	
## Basic concept 
+ Annotation
+ POJO vs POJI
+ Spring Bean
+ ApplicationContext Container
+ BeanFactory Container
## Important Spring Annotations
+ @Configuration/@ComponentScan
+ @Component <> @Service <> @Bean
+ @Autowired

## Sample and exercise

# 2a. Spring Web-Rest API + Unit Test

## Spring MVC
+ Request Driven
+ HTTP Servlet/ DispatcherServlet
+ Web Application Context
+ MVC pattern: Controller/ Model
+ HandlerMapping/@RequestMapping @ModelAttribute ViewResolver

## Spring Boot
+ Spring boot = Spring MVC + Auto Configuration(Don't need to write spring.xml file for configurations) + Server(You can have embedded Tomcat, Netty, Jetty server).
+ How to initialize a Spring Boot project
## Restful API
+ GET/POST...
+ Exception
+ Upload & Download
+ Swagger: API Design
+ RestTemplate

## Unit Test
+ JUnit5 / Mockito
+ @SpringBootTest, @TestConfiguration và @MockBean
+ @WebMvcTest
+ @DataJpaTest

## Demo Simple Rest Server

# 2b. Angular 

## CLI
## Concepts
+ NgModule
+ Component
+ Service
+ Routing
+ Hook

## Unit Test

# 3. Spring Web+ Authentication + Data

## Spring Boot Structure
 + Models & DTOs:  pojos classes will be present
 + Services and DAOs
 + Security
 + Util - utility classes
 + Controllers
 + Validation - validators classes
 + Exception
 + Config - class which will read from property files
 
## Spring Security Architecture
+ @EnableWebSecurity/WebSecurityConfigurerAdapter.configure
+ HttpSecurity 
+ Basic Authentication
+ Session-based Authentication
+ Token-based Authentication
+ CORS & CSRF

## Spring data
+ Sping Hibenate, JPA
+ Create Table
+ JPA Repository
+ JOIN Table
+ Lazy load
+ Entity Graph
+ Named Query
+ Transaction
+ Paging & Sorting

## Demo

## Sample and excercise

# 4. [Spring Reactive](./spring_reactive.md) 
+ [Reactive programing](https://spring.io/blog/2016/06/07/notes-on-reactive-programming-part-i-the-reactive-landscape)
+ WebFlux
+ Unit Test :import reactor.test.StepVerifier;
# 5. Microservice

## Event Driven Architecture
+ Core concepts
    + Message Broker
    + Events vs Messages
    + Asynchronous Messaging
+ RabbitMQ vs Kafka


## Geteway

## Service Discovery & Load Balancing

## Circuit Breaker

## Centralize Configuration vs Logs

## Containerization

