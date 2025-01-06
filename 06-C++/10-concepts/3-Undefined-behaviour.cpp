/*Undefined behavior in C++ refers to a situation where a program’s behavior cannot be predicted due to any violation of the language rules. 
It is a result of various factors like uninitialized variables, using pointers to deallocated memory, out-of-bounds memory access, etc. 
The C++ standard does not define the behavior in such cases, which means the compiler or the runtime system is free to handle these 
situations in any way it wants.*/



/*1.Uninitialized Variables: Accessing the value of an uninitialized variable can lead to undefined behavior. The value of an 
uninitialized variable is arbitrary and depends on what was in the memory location before the variable was declared.*/

int x;
int y = x + 5; // Undefined behavior since x is uninitialized

/*2.Out-of-bounds Memory Access: Accessing memory outside the boundaries of an array or buffer may result in undefined behavior.*/

int arr[5];
int val = arr[5]; // Undefined behavior since the valid indices are 0 to 4


/*2.Null Pointer Dereference: Dereferencing a null pointer may lead to undefined behavior.*/

int *ptr = nullptr;
int val = *ptr; // Undefined behavior since ptr is a null pointer


/*3.Division by Zero: Performing a division operation by zero is undefined behavior in C++.*/

int x = 5;
int y = 0;
int z = x / y; // Undefined behavior since division by zero is not allowed