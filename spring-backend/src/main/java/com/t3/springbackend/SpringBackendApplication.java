package com.t3.springbackend;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;
// import org.springframework.boot.CommandLineRunner;
// import com.t3.springbackend.entity.Task;
// import com.t3.springbackend.repository.TaskRepository;
// import com.t3.springbackend.service.TaskService;

@SpringBootApplication
public class SpringBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackendApplication.class, args);
	}

	// @Bean
	// CommandLineRunner commandLineRunner (TaskRepository taskRepository){
	// 	return args -> {
	// 		Task task = new Task();
	// 		task.setName("name");
	// 		task.setDescription("descr");
	// 		task.setDone(false);
	// 		taskRepository.save(task);

	// 	};
	// }

}
