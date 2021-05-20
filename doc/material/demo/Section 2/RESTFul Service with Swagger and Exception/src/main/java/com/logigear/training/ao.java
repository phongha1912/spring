package com.logigear.training;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.Vector;

public class ao {

	public static void main(String[] args) {
		//Array list
		ArrayList <String> names1 =new ArrayList <String>();
		names1.add ("apple");
		names1.add ("cherry");
		names1.add ("kiwi");
		names1.add ("banana");
		names1.add ("cherry");
		System.out.println ("ArrayList: " + names1);
		
		//Vector Synchronized
		Vector <String> names2 = new Vector <String> ( );
	 	names2.add ("cherry");
		names2.add ("apple");
		names2.add ("banana");
		names2.add ("kiwi");
		names2.add ("apple");
		System.out.println ("Vector: " + names2);
		
		//Linked list
		LinkedList <String> names3 = new LinkedList <String> ( ) ;
		names3.add("banana");
		names3.add("cherry");
		names3.add("apple");
		names3.add("kiwi");
		names3.add("banana");
		System.out.println ("LinkedList: " + names3);
		
		//Hash set
		HashSet<String> names4 = new HashSet <String>( ) ;
		names4.add("banana");
		names4.add("cherry");
		names4.add("apple");
		names4.add("kiwi");
		names4.add("banana");
		System.out.println ("HashSet: " + names4);
		
		//Linked Hash set
		LinkedHashSet<String> names5 = new LinkedHashSet <String>( ) ;
		names5.add("banana");
		names5.add("cherry");
		names5.add("apple");
		names5.add("kiwi");
		names5.add("banana");
		System.out.println ("LinkedHashSet: " + names5);
		 
		//Tree set SORT
		TreeSet<String> names6= new TreeSet<String>( ) ;
		names6.add("cherry");
		names6.add("banana");
		names6.add("apple");
		names6.add("kiwi");
		names6.add("cherry");
		System.out.println("TreeSet: " + names6);
		
		//Hash map
		HashMap<String, String> names7 =new HashMap<String,String>( );
		names7.put ("key2","banana");
		names7.put ("key3","apple");
		names7.put ("key4","kiwi");
		names7.put("key1","cherry");
		names7.put ("key1","cherry");
		System.out.println("HashMap: " + names7);
		
		//Hash table Synchronized
		Hashtable<String,String> names8 =new Hashtable<String,String>( );
		names8.put("key1","cherry");
		names8.put("key2","apple");
		names8.put("key3","banana");
		names8.put("key4","kiwi");
		names8.put("key2","orange");
		System.out.println("Hashtable: " +names8);
		
		//LinkedHashMap
		LinkedHashMap<String,String> names9 =new LinkedHashMap<String,String>( );
		names9.put("key1","cherry");
		names9.put("key2","apple");
		names9.put("key3","banana");
		names9.put("key4","kiwi");
		names9.put("key2","orange");
		System.out.println("LinkedHashMap: " +names9);
		
		//Tree map SORT
		TreeMap<String,String> names =new TreeMap<String,String>( );
		names.put("key4","kiwi");
		names.put("key2","orange");
		names.put("key1","cherry");
		names.put("key2","banana");
		names.put("key3","apple");
		System.out.println("TreeMap: " + names);
			
	}

}
