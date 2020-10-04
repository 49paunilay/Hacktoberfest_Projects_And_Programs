import numpy as np
import cv2

# Start capture through webcam
cap = cv2.VideoCapture(0)

# Define output file and codec
frame_width = int(cap.get(3))
frame_height = int(cap.get(4))
size = (frame_width, frame_height)
fourcc = cv2.VideoWriter_fourcc('M', 'J','P', 'G')
out = cv2.VideoWriter('output.avi', fourcc, 20.0, size)

# Capture a one time background as base image
background = 0
for i in range(30):
    ret, background = cap.read()

# Read input from webcam and run masking algorithm
while cap.isOpened():
    ret, frame_ndarray = cap.read()
    if not ret:
        break

    # Define mask range in HSV. Change here to change the object colour
    hsv = cv2.cvtColor(frame_ndarray, cv2.COLOR_BGR2HSV)
    lower_blue = np.array([95, 10, 18])
    upper_blue = np.array([135, 255, 255])
    mask1 = cv2.inRange(hsv, lower_blue, upper_blue)
    mask1 = cv2.morphologyEx(mask1, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8),
                             iterations=2)
    mask2 = cv2.bitwise_not(mask1)

    res1 = cv2.bitwise_and(background, background, mask=mask1)
    res2 = cv2.bitwise_and(frame_ndarray, frame_ndarray, mask=mask2)

    # Show output and write to file
    final_output = cv2.addWeighted(res1, 1, res2, 1, 0)
    out.write(final_output)
    cv2.imshow('CV2 Window', final_output)
    k = cv2.waitKey(10)

cap.release()
cv2.destroyAllWindows()
