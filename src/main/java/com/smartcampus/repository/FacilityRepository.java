package com.smartcampus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smartcampus.entity.Facility;

public interface FacilityRepository extends JpaRepository<Facility, Long> {
}