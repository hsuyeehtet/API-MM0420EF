package com.kyn.springsocial.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.springsocial.model.Store;
import com.kyn.springsocial.repository.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService{

	@Autowired
	private StoreRepository storeRepo;
	
	@Override
	public List<Store> viewStore() {
		return storeRepo.findAll();
	}
	@Override
	public List<Store> searchByKey(String key) {
		return storeRepo.searchByKey(key);
	}

	@Override
	public List<Store> searchByRating(String lower, String upper) {
		return storeRepo.searchByRating(lower, upper);
	}

}
