# 📌 Contact Form with Client-Side Validation

## 📖 Project Description

This project is a simple Contact Form built using HTML, CSS, and JavaScript.  
It implements client-side validation to ensure that users enter valid information before submitting the form.

The form validates:
- Name (required, letters and spaces only)
- Email (required, valid email format using regex)
- Message (required)

The form does not send data to a server. It only demonstrates validation and user feedback.

---

## 🎯 Objective

To build a contact form with client-side validation that:

- Prevents submission if fields are invalid
- Displays error messages below each input
- Shows a success message when all inputs are valid
- Uses regular expressions for email validation

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Chrome Browser (for testing)  
- VS Code (for development)

---

## 📂 Project Structure

```
project-folder/
│
├── index6.html
├── style6.css
├── script6.js
└── README6.md
```

---

## ✅ Features Implemented

- Form with Name, Email, and Message fields
- Clean and simple UI design
- Client-side validation using JavaScript
- Regex-based email validation
- Name validation (letters and spaces only)
- Error messages displayed below inputs
- Success message on valid submission
- Prevention of form submission if validation fails
- Handles edge cases (empty fields, spaces, invalid email format)

---

## 🧪 Validation Rules

### Name:
- Cannot be empty
- Must contain only letters and spaces

### Email:
- Cannot be empty
- Must follow a valid email format
- Validated using regular expression

### Message:
- Cannot be empty


## 🎓 Learning Outcomes

- Understanding client-side validation
- Using `addEventListener()` in JavaScript
- Preventing default form submission using `event.preventDefault()`
- Working with regular expressions (Regex)
- Displaying dynamic error messages in the DOM

---

## 📌 Note

This project demonstrates client-side validation only.  
In real-world applications, server-side validation is also required for security purposes.