// crud operation ...
const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to database !!!')
    }
    console.log('connecting to database !!!!')
    const db=client.db()
})
