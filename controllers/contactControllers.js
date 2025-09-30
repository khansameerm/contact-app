import expressAsyncHandler from "express-async-handler";
import Contact from "../models/contactModels.js";

export const getAllContacts =  expressAsyncHandler( async (req,res) => {
    const contacts = await Contact.find().sort(-1);
    res.status(200).json({message:`Get all contacts inside controller ${contacts}`});
});

export const getContact = expressAsyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if( !contact){
        return res.status(404).json({message: "Contact not found"})
    }
    res.status(200).json({message:`Get contact with id ${req.params.id}`, contact:contact});
});

export const createContact = expressAsyncHandler(async (req,res) => {
    const {name , email, phone} = req.body;
    if( !name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const contact = new Contact({name: name, email:email, phone:phone});
    const savedContact = await contact.save();
    res.status(201).json({message:`Created contact`,savedContact});

});

export const UpdateContact = expressAsyncHandler(async (req,res) => {
    const {name, email, phone} = req.body;
    if (!name && !email && !phone) {
        return res.status(400).json({message: "No Data provided to update"});
    }
    const contact = await Contact.findByIdAndUpdate(req.params.id, {name, email, phone}, {new:true});
    if (!contact) { return res.status(404).json({message: "Contact not found"})};
    res.status(200).json({message:`Update contact with id ${req.params.id}`, contact:contact});
});

export const deleteContact = expressAsyncHandler(async (req,res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
       return res.status(404).json({message: "Contact not found"});
    }
    res.status(200).json({message:`Deleted contact with id ${req.params.id}`});
});



