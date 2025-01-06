/*Type Traits are a set of template classes in C++ that help in getting the information about the type’s properties, behavior, or 
characteristics. They can be found in the <type_traits> header file. By using Type Traits, you can adapt your code depending on the
properties of a given type, or even enforce specific properties for your type parameters in template code.

Some common type traits are:

1.std::is_pointer: Checks if a given type is a pointer type.
2.std::is_arithmetic: Checks if the given type is an arithmetic type.
3.std::is_function: Checks if the given type is a function type.
4.std::decay: Applies decltype rules to the input type ( strips references, cv-qualifiers, etc. ).*/


#include <iostream>
#include <type_traits>

int main() {
    int a;
    int* a_ptr = &a;

    std::cout << "Is 'a' a pointer? " << std::boolalpha << std::is_pointer<decltype(a)>::value << std::endl;
    std::cout << "Is 'a_ptr' a pointer? " << std::boolalpha << std::is_pointer<decltype(a_ptr)>::value << std::endl;

    return 0;
}

/*Composing Type Traits
Some type traits help you compose other traits or modify them, such as:

1.std::conditional: If a given boolean value is true, use type A; otherwise, use type B.
2.std::enable_if: If a given boolean value is true, use type A; otherwise, there is no nested type.*/

#include <iostream>
#include <type_traits>

template <typename T>
typename std::enable_if<std::is_arithmetic<T>::value, T>::type find_max(T a, T b) {
    return a > b ? a : b;
}

int main() {
    int max = find_max(10, 20);
    std::cout << "Max: " << max << std::endl;

    return 0;
}