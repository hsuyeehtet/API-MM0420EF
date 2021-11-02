package com.kyn.springsocial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.springsocial.model.Store;
import com.kyn.springsocial.service.StoreService;

@RestController
public class StoreController {
	
	@Autowired
	private StoreService storeService;
	
	@GetMapping("/view-stores")
    @PreAuthorize("hasRole('USER')")
	public List<Store> viewStore(){
		List<Store> stores = storeService.viewStore();
		return stores;
	}
	
	//Search By Keyword (Search By Store Name, Search By Store Rating, Search By Store description,Search By Store Reg Date )
	@GetMapping(value = "/store/search/{key}")
	public List<Store> searchByKey(@PathVariable String key){
				return storeService.searchByKey(key);
	}
	
	//Search By Price Range
	@GetMapping(value = "/search/{lower}/{upper}")
	public List<Store> searchByRating(@PathVariable String lower, @PathVariable String upper){
	return storeService.searchByRating(lower, upper);
	}
}
