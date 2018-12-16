# Bamazon

## What is it?
* Bamazon is a TNAC, or Totally not an Amazon clone.  We have no affiliation with Amazon LLC. 
* Bamazon will be a command line node app that takes in parameters and gives you back data.

## Screenshots
![https://github.com/MikePreston17/bamazon/tree/master/src/screenshots/](Screenshots)

## Example Usage

**Product Search:**

```javascript
$ node bamazonCustomer\n
? Id of the product? 10000\n
? How many? 2
```

![Successful Search](https://github.com/MikePreston17/bamazon/blob/master/src/screenshots/have-a-basketball.png)

**Out of Stock:**

```javascript
$ node bamazonCustomer\n
? Id of the product? 10000\n
? How many? 2
```

![Out of Stock](https://github.com/MikePreston17/bamazon/blob/master/src/screenshots/No-tennis-balls-left.png "out of balls")

**Not Enough:**

```javascript
$ node bamazonCustomer\n
? Id of the product? 10000\n
? How many? 2
```

![Not Enough](https://github.com/MikePreston17/bamazon/blob/master/src/screenshots/dont-have-enough.png "not enough balls")
