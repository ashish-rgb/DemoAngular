package com.nissan.model;

public class JwtResponse {
	
	private final String jwttoken;
	private String userName;
	private Integer roleId;
	
	public JwtResponse(String jwttoken, String userName, Integer roleId) {
		super();
		this.jwttoken = jwttoken;
		this.userName = userName;
		this.roleId = roleId;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public String getJwttoken() {
		return jwttoken;
	}
	
	@Override
	public String toString() {
		return "JwtResponse [jwttoken=" + jwttoken + ", userName=" + userName + ", roleId=" + roleId + "]";
	}
	
	
}
