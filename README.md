# Design Patterns

Design Patterns are reusable solutions to commonly problems in software design.

- Patterns are proven solutions, can be easily reused and can be expressive.

## Creational

Handles object creation mechanisms where objects are created in a manner suitable.

- [Constructor](constructor/main.js): Class based pattern that uses the constructor spresent in the class to create specific types of objects.
- Singleton: A class with only a single instance with global access points.
- Prototype: A fully initialized instance used for copying or cloning.
- Builder: Separates object construction from its representation, always creates the same type of object.
- Factory: Creates an instance of several families of classes without detailing concrete classes.

## Structural

Focused on relationships between different elements. If one element changes does not mean that the others will do.

- Facade: A single class that hides the complexity of an entire subsystem.
- Proxy: A place holder object representing the true object.

## Behavioral

Streamlines the communication between disparate elements in a system.

- Iterator: Sequentially access the elements of a collection without knowing the inner workings of the collection.
- Observer: A way of notifying change to a number of classes to ensure consistency between the classes.
- Mediator: Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
- State: Alter an object's behavior when its state changes.

# Sources

- [Learning JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/)
