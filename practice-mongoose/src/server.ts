import mongoose from "mongoose";
import app from "./app"



const port: number = 5000



// database connection

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

        console.log(`🛢️Database connetion successful`)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(`Failed to connect database`, err)
    }
}

bootstrap()


// mongodb compass terminal command
/*

---download studio 3t for make the data more visible and also noSQLBooster**
* show db/database-->to see all the database
*use 'databaseName'-->to switched to the database
*db.getCollection('collectionName').find() -->to get all the collection data


$eq, $ne, $lte, $gt, $gte, $lt

user.find({age: {$eq: 18}},{age:1})
user.find({age: {$eq: 18}}).project({age:1, name:1})
user.find({age: {$eq: 18}}).project({age:1, name:1}).sort({age:1})
user.find({age: {$gte:18 , $lte:50}})  implicit and

$in, $nin

db.practice.find({ age: { $in: [18, 23] } }) implicit and
db.practice.find({gender: 'Female', age: { $in: [18, 23] } })
db.practice.find({gender: 'Female', age: { $nin: [18,30,33, 23] } })
db.practice.find({gender: 'Female',
age: { $nin: [18,30,33, 23] },interests: "Gaming"}).project({gender:1,age:1,interests:1})
age: { $nin: [18,30,33, 23] },interests: {$in:["Gaming", "Travelling"]}}).project({gender:1,age:1,interests:1})

$and, $or

db.practice.find({
    $and: [
        { gender: "Female" },
        { age: { $lt: 30 } }
    ]
}).project({age:1, gender:"Female"})  explicit and

db.practice.find({
    $and: [
        { gender: "Female" },
        { age: { $lt: 30 } },
        {"skills.name": "JAVASCRIPT"}
    ]
}).project({age:1, gender:"Female", skills:1})

db.practice.find({
    $or: [
        {"skills.name": "JAVASCRIPT"},
        {"skills.name":"PYTHON"}
    ]
}).project({"skills.name":1})

db.practice.find({age:{$ne:18},age:{$gt:15}}).project({age:1}) ai rokom field hoile implicit and bebohar kora jabe nah sei khetre explecit and bebohar korte hobe
db.practice.find({
    $and:[
        {age:{$ne:18},
        {age:{$gt:15}}
    ]
})


$exists, $type, $size

db.practice.find({age:{$exists: true}})  age field ta exists kore amn document gola tmi amke deo eta mean kore
db.practice.find({age:{$exists: false}})  age field ta exists kore nah amn document gola tmi amke deo eta mean kore

db.practice.find({age:{$type: "int"}}) it will give the documents where the age value is as integer
db.practice.find({age:{$type: "string"}}) it will give the documents where the age value is as string

db.practice.find({skills:{$size:0}}) where all the skills field value is empty
db.practice.find({skills:{$size:1}}) where  skills field size is 1, its for array

$all, $elemMatch,

db.practice.find({interests:"Travelling"}).project({interests:1})  aita diye  array er moddhe specific property thakle documents dibe

db.practice.find({"interests.0":"Travelling"}).project({interests:1}) jaigola te first index Travelling seigola dibe

db.practice.find({interests:{$all:[ "Travelling", "Gaming", "Reading" ]}}).project({interests:1})

db.practice.find({skills:{$elemMatch: {name: "JAVA",level: "Intermidiate"}}}).project({skills:1})


$set, $addToSet, $push

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$set: {country: "bangladesh"}}) for update primitive type value

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$addToSet: {interests: "Reading"}}) aita korte akber modifie hoya value same value diye r modify kore nah. array er moddhe data add kore

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$addToSet: {interests: {$each: ["Cooking","Writting"]}}}) add/set multiple data in array


db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$push: {interests: {$each: ["Cooking","Writting"]}}}) aita korle array abar same value diye modify kora jai


$unset, $pop, $pull, $pullAll

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$unset: {education: "" }}) /{education:1} aita diye kono document theke kono field k uraiya deya jai/moche deya jai

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$pop: {languages:1}}) array er moddhe theke last dik theke akta element nai hoye jabe
db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$pop: {languages:-1}}) array er moddhe theke first dik theke akta element nai hoye jabe

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$pull: {friends:"Abdur Rakib"}}) specific kawke array theke nai kore deya

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$pullAll: {friends:["Mir Hussain", "Najmus Sakib"]}}) array theke specific multiple data k ber kore deya


db.createCollection('test') it will crate new collection name as test
db.test.drop() it will delete whole collection named test

$inc, $min, 

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$inc:{age:5}}) it will add a new value with new value

db.practice.updateMany({},{$rename:{"favoutitColor":"favourteColor"}})  it will rename key name of a document

db.practice.updateOne({_id:ObjectId("6406ad63fc13ae5a40000067")},{$min:{minAge:18}})




*/



