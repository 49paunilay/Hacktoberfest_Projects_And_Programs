## What is  it?

This project is an implementation of OpenCV masking. 
- It captures a base image through WebCam
- Looks for a defined colour range in subsequent frames of the WebCam video
- Create mask1 of the matching colour range and mask2 representing the rest of the area 
- Does bitwise AND to preserve the background area covered by mask 1
- Rewrites the are  covered by mask2
- Shows the image, saves the Frames as a video

In short it makes the areas with the defined colour invisible.

## Requirements
- python3
- python3-pip
- ```pip install -r requirements.txt```

## To run
- Keep the webcam in a stable place with an unblocked view
- Run task.py ```python3 task.py```
- Bring an object of the colour defined (Blue here)
- See the object vanish