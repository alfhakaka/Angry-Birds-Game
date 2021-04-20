# AngryBirdsStage3
Stage 3 Angry Birds: Introducing Constraint


data types: Number, Strings, boolean, Arrays

numbers: integers, decimals
Strings- alpha numeric symbol - enclose with inverted commas
boolean- true or false
Arrays- hold more than one value
	- to group , we use brackets - square brackets

array = [1,2,3]
	= ["a", "b" ,"c"]
	= [1, "a" ,true]


data is value like 1, "hello world!", true/false


1. length - how many or the count of items
	- counting starts with 1
2. index- positioning of the item inside array
	-positioning starts with 0


arr1= [  0 1
    0	[1,2],
    1   [3,4],
    2   [5,6] 
]

main index- row
sub index -column

arr1[main] [sub]

arr1[0][1]

push - inserts item at the end of array
	array.push(item)
  
	111111111
pop - take out the last item of array

var x= array.pop()

  // index  0 1 2  3     4
  arr =    [1,2,3,'a',[6,7,8]]
  console.log(arr[arr.length-1])
  
  arr.push(true)
   console.log(arr)
  
  var x= arr.pop()
     console.log(arr)
     console.log(x)


to iterate thru the array, we need for loop

arr1=[[1,2],[3,4],[5,6]]
  
  arr1.push([7,8]);
  
  arr1.push([9,10]);

  for (var i=0; i<arr1.length; i=i+1){
    console.log(arr1[i][0],arr1[i][1])
    
  }