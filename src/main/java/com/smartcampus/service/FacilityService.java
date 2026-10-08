package com.smartcampus.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smartcampus.entity.Facility;
import com.smartcampus.repository.FacilityRepository;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository repo;

    public List<Facility> getAll() {
        return repo.findAll();
    }

    public Facility save(Facility f) {
        return repo.save(f);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}