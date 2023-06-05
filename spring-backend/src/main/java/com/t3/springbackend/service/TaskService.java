package com.t3.springbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t3.springbackend.entity.Task;
import com.t3.springbackend.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task findTaskById(Long id){

        Optional<Task> optTask = taskRepository.findById(id);

        if(optTask.isPresent()){
            return optTask.get();
        }else{
            return null;
        }

    }

    public List<Task> findAllTasks(){
        return taskRepository.findAll();
    }
    
}
