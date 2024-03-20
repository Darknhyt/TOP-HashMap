import { HashMap } from "./hashmap.js";
const hashMap = new HashMap();
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