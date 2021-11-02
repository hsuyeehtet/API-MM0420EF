package com.kyn.springsocial.service;

import java.util.List;

import com.kyn.springsocial.model.Store;

public interface StoreService {
	public List<Store> viewStore();
	public List<Store> searchByKey(String key);
	public List<Store> searchByRating(String lower, String upper);
}
