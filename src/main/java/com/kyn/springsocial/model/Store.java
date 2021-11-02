package com.kyn.springsocial.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	
	@Column(nullable = false)
	private String storeName;
	
	@Column(nullable = false)
	private String storeRating;
	
	private String storeDesc;
	
	private String storeRegDate;
	
	public int getStoreId() {
		return storeId;
	}


	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}


	public String getStoreName() {
		return storeName;
	}


	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}


	public String getStoreRating() {
		return storeRating;
	}


	public void setStoreRating(String storeRating) {
		this.storeRating = storeRating;
	}


	public String getStoreDesc() {
		return storeDesc;
	}


	public void setStoreDesc(String storeDesc) {
		this.storeDesc = storeDesc;
	}


	public String getStoreRegDate() {
		return storeRegDate;
	}


	public void setStoreRegDate(String storeRegDate) {
		this.storeRegDate = storeRegDate;
	}


	public String toString() {
		return "Store [storeId=" + storeId + ", storeName=" + storeName + ", storeRating=" + storeRating
				+ ", storeDesc=" + storeDesc + ", storeRegDate=" + storeRegDate + " ]";
	}	

}
