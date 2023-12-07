#!/usr/bin/env python 

import rospy
from calypso.msg import joystick

# Assumption that forward is +ve and backward is -ve for all motors with next configuration
# m1 m2
# m3 m4
# m5 m6
SPEED_MULTIPLIER = 100

def listenerCallback(joystickValues):
    if (abs(joystickValues.x) > abs(joystickValues.y)):
        # Turn left or right
        m1 = m3 = m5 = joystickValues.x * SPEED_MULTIPLIER
        m2 = m4 = m6 = -1 * joystickValues * SPEED_MULTIPLIER

    else:
        # Move front or back
        m1 = m2 = m3 = m4 = m5 = m6 = joystickValues * SPEED_MULTIPLIER

    rospy.loginfo("m1 = %d \tm2 = %d\tm3 = %d \tm4 = %d\tm5 = %d \tm6 = %d\t" %(m1, m2, m3, m4, m5, m6))

def listener():
    rospy.init_node("motorDriver", anonymous=False)
    rospy.Subscriber('joystick_values', joystick, listenerCallback)

if __name__ == '__main__':
    listener()
    rospy.spin()