import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashset.js";

const hashMap = new HashMap();
console.log("-----HASHMAP-----");
//1. Calculating at hash
console.log("Hash for 'dan': "+ hashMap.hash("dan"))
//2. Set values
console.log("Initial values")
hashMap.set("dan","Danny")
hashMap.set("gio","Anghelo")
hashMap.set("fer","Fernando")
hashMap.set("alex","Alex")
hashMap.set("alex","Alexander") //Overwitten a value
console.log(hashMap.entries());
//3. Getting a value from a key
console.log("From key 'dan' the value is: "+ hashMap.get("dan"))
console.log("From key 'alex' the value is: "+ hashMap.get("alex"))
//4. Checking if the key exists
console.log("The key 'dan' is in use: "+ hashMap.has("dan"))
console.log("The key 'bio' is in use: "+ hashMap.has("bio"))
//5. Removing an element
console.log("Removing 'far': "+ hashMap.remove("far"))
console.log("Removing 'fer': "+ hashMap.remove("fer"))
//6. Getting the length
console.log("The length is: "+ hashMap.length())
//7. Clear all entries
hashMap.clear()
console.log("The hashmap is empty, adding new values...")
//Adding new values
hashMap.set("car","Caroline")
hashMap.set("aby","Abigail")
hashMap.set("dan","Danny")
//8. Getting all keys
console.log("The keys are:")
console.log(hashMap.keys())
//9. Getting all values
console.log("The values are:")
console.log(hashMap.values())
//10. Getting all values
console.log("All entries:")
console.log(hashMap.entries())

//EXTRA CREDIT
const hashSet = new HashSet();
console.log("-----HASHSET-----");
//Set values
console.log("Initial values")
hashSet.set("Danny")
hashSet.set("Anghelo")
hashSet.set("Fernando")
hashSet.set("Alex")
console.log(hashSet.keys())
//Getting a key
console.log("Key from 'Danny': "+ hashSet.get("Danny"))
console.log("Key From 'Axel': "+ hashSet.get("Axel"))
//4. Checking if the key exists
console.log("The key 'Danny' is in use: "+ hashSet.has("Danny"))
console.log("The key 'Julia' is in use: "+ hashSet.has("Julia"))
//5. Removing an element
console.log("Removing 'Fernando': "+ hashSet.remove("Fernando"))
console.log("Removing 'Angelica': "+ hashSet.remove("Angelica"))
//6. Getting the length
console.log("The length is: "+ hashSet.length())
//7. Clear all entries
hashSet.clear()
console.log("The hashmap is empty, adding new values...")
//Adding new values
hashSet.set("Caroline")
hashSet.set("Abigail")
hashSet.set("Danny")
//8. Getting all keys
console.log("The keys are:")
console.log(hashSet.keys())