package com.kyn.springsocial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kyn.springsocial.model.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{
	@Query(value = "SELECT s FROM Store s WHERE storeName LIKE '%' || :key ||  '%'" + 
			"OR storeRating LIKE '%' || :key ||  '%' " + 
			"OR storeDesc LIKE '%' || :key ||  '%' " +
			"OR storeRegDate LIKE '%' || :key ||  '%' ")
	public List<Store> searchByKey(@Param("key") String keys);
	
	@Query(value = "SELECT s FROM Store s WHERE storeRating BETWEEN :lower AND :upper")
	public List<Store> searchByRating(@Param("lower") String lower, @Param("upper") String upper);
	
}
