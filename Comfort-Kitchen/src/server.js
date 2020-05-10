var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var register=require("./Model/customer");
var bookingdetails=require("./Model/requests");
var cors=require('cors');
var mnglogin=require("./Model/manager");
var jwt=require('jsonwebtoken');
var nodemailer= require('nodemailer');
var Req=require('./Model/requests');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/comfortkitchen',{ useNewUrlParser: true },function (err,response){
if (err) { console.log('Database is not  connected'); }else{
    console.log('Database is connected');
  }
} 
);
app.use(cors());
app.set('port',process.env.port || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });

   
 app.post("/register",function(req,res){
     console.log('Register is Processing..');
     var nr=new register();
     nr.cname=req.body.cname;
     nr.password=req.body.password;
     nr.email=req.body.email;
     nr.mobileno=req.body.mobileno;
     nr.save(function(err,result){
         if(err)
         {
             console.log("Error Occured.");
             console.log(err);
            return res.send({status:'fail'});
         }
         else
         {
             console.log("User Successfully Registered and Userdetails..");
             console.log(nr);
             return res.send({status:'success'});
         }
     });
 });

 app.post("/booktable",function(req,res){
    console.log('Booking under Process--:server.js');
    var nr=new bookingdetails();
    nr.gname=req.body.gname;
    nr.date=req.body.date;
    nr.email=req.body.email;
    nr.phone=req.body.phone;
    nr.time=req.body.time;
    nr.guests=req.body.guests;
    nr.hotelid="dhruv267@gmail.com";
    nr.save(function(err,result){
        if(err)
        {
            console.log("Error Occured.");
            console.log(err);
           return res.send({status:'fail'});
        }
        else
        {
            console.log("Booking sucessful!");
            console.log(nr);
            return res.send({status:'success'});
        }
    });
});

app.post("/login",function(req,res){
    console.log("in login");
    name=req.body.email;
    password=req.body.password;
    register.findOne({"email":name,"password":password},function(err,customer)
    {
        if(err)
        {
            console.log(err);
        }
        else{

        }
        if(customer){
        if(customer.email==name){
           // console.log(user.username);
            console.log(name);
            console.log("correct crediantials.....")
            return res.send({status:'success'});

        }}
        else{
            console.log("worng");
            return res.send({status:'fail'});
        }   
    }); 
 });
 app.post("/mlogin",function(req,res){
    console.log("in Managerlogin");
    email=req.body.email;
    password=req.body.password;
    mnglogin.findOne({"email":email,"password":password},function(err,manager)
    {
        if(err)
        {
            console.log(err);
        }
        else{

        }
        if(manager){
        if(manager.email==email){
           // console.log(user.username);
            console.log(email);
            console.log("correct crediantials.....")
            return res.send({status:'success'});

        }}
        else{
            console.log("wrong");
            return res.send({status:'fail'});
        }   
    }); 
 });

 app.delete('/acceptreq/:data',function(req,res){

    console.log("Server.js/acceptreq()");
    console.log(req.params.data);
    Req.find({"_id":req.params.data},function(err,cat){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("category not Found !");

        }
        else{
            console.log(cat);
            var re = new Req();
            re.gname=cat.gname;
            re.date=cat.date;
            re.time=cat.time;
            re.email=cat.email;
            re.guests=cat.guests;

            var mailOptions = {
                from: 'booking.expressss@gmail.com',
                to: re.email,
                subject: 'Good News! Your Booking is confirmed!',
                html: "<h1 style='color:blue;' >Comfort Kitchen</h1>"+
                "<br>Hi "+re.gname+",<br>"+
                "<p>Your request for booking table is confirmed! Here are booking details.</p><br>"+
                "<table style='background:MintCream; width: 100%;border:2px solid black;'>" +
                    "<tr><td>Name:</td><td>"+re.gname+"</td></tr>" +
                    "<tr><td>Email:</td><td>" + re.email + "</td></tr>" +
                    "<tr><td>Date:</td><td>" + re.date + "</td></tr>" +
                    "<tr><td>Time:</td><td>" + re.time + "</td></tr>" +
                    "<tr><td>No. of Guests:</td><td>" + re.guests + "</td></tr>" +
                    "</table><br><br><br>"+
                    "<p>Thank you for choosing Comfort Kitchen!</p>"
            };
            var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'booking.expressss@gmail.com',pass: 'booking.express'}});
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) { console.log(error); }

                else { 
                    console.log('Email sent: ' + info.response); 
                 Req.remove({"_id":req.params._id,"deleted":null},function(err){
                    if(err)
                    {
                        console.log("Request process error..");
                        res.send(400);
                    }
                    else{
                        console.log("Request processed successfully!");
                        res.send({"message":"Request processed successfully!"})
                    }
                })
            }
            });
            
        }
    })
});


app.get("/displayreq/:mail",function(req,res){
    console.log("display request data");
   managerid=req.params.mail;
   console.log(managerid);
    Req.find({"hotelid":managerid},function(err,reqs){
       if(err)
       {
           console.log("Error : ")
           res.send(400)
       }
       else
       {
           console.log("all Category")
           console.log(reqs)
           res.send(reqs)

       }
    });
});

app.delete('/rejectreq/:_id',function(req,res){

    console.log("Server.js/rejectreq()");
    console.log(req.params._id);
    _id=req.query.data;
    Req.find({"_id":req.params._id},function(err,cat){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("category not Found !");

        }
        else{
            console.log(cat);
            var re = new Req();
            re.gname=cat.gname;
            re.date=cat.date;
            re.time=cat.time;
            re.email=cat.email;
            re.guests=cat.guests;
            var mailOptions = {
                from: 'booking.expressss@gmail.com',
                to: re.email,
                subject: 'Apologies! Your request is declined!',
                html: "<h1 style='color:red;' >Comfort Kitchen</h1>"+
                "<br>Hi "+re.gname+",<br>"+
                "<p>Your request for booking table is declined by Restraurant Manager! Here are booking details provided by you.</p><br>"+
                "<table style='background:MintCream; width: 100%;border:2px solid black;'>" +
                    "<tr><td>Name:</td><td>"+re.gname+"</td></tr>" +
                    "<tr><td>Email:</td><td>" + re.email + "</td></tr>" +
                    "<tr><td>Date:</td><td>" + re.date + "</td></tr>" +
                    "<tr><td>Time:</td><td>" + re.time + "</td></tr>" +
                    "<tr><td>No. of Guests:</td><td>" + re.guests + "</td></tr>" +
                    "</table><br><br><br>"+
                    "<p>Thank you for choosing Comfort Kitchen!</p>"
            };
            var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'booking.expressss@gmail.com',pass: 'booking.express'}});
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) { console.log(error); }
                else { console.log('Email sent: ' + info.response);
                Req.remove({"_id":req.params._id,"deleted":null},function(err){
                    if(err)
                    {
                        console.log("Request process error..");
                        res.send(400);
                    }
                    else{
                        console.log("Request processed successfully!");
                        res.send({"message":"Request processed successfully!"})
                    }
                })
            }
            });
           
        }
    })
});