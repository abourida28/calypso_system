;; Auto-generated. Do not edit!


(when (boundp 'calypso::joystick)
  (if (not (find-package "CALYPSO"))
    (make-package "CALYPSO"))
  (shadow 'joystick (find-package "CALYPSO")))
(unless (find-package "CALYPSO::JOYSTICK")
  (make-package "CALYPSO::JOYSTICK"))

(in-package "ROS")
;;//! \htmlinclude joystick.msg.html


(defclass calypso::joystick
  :super ros::object
  :slots (_lx _ly ))

(defmethod calypso::joystick
  (:init
   (&key
    ((:lx __lx) 0.0)
    ((:ly __ly) 0.0)
    )
   (send-super :init)
   (setq _lx (float __lx))
   (setq _ly (float __ly))
   self)
  (:lx
   (&optional __lx)
   (if __lx (setq _lx __lx)) _lx)
  (:ly
   (&optional __ly)
   (if __ly (setq _ly __ly)) _ly)
  (:serialization-length
   ()
   (+
    ;; float64 _lx
    8
    ;; float64 _ly
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _lx
       (sys::poke _lx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ly
       (sys::poke _ly (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _lx
     (setq _lx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ly
     (setq _ly (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get calypso::joystick :md5sum-) "4ea7417bf6c4ea7f9c68a7b66f76e96c")
(setf (get calypso::joystick :datatype-) "calypso/joystick")
(setf (get calypso::joystick :definition-)
      "float64 lx
float64 ly

")



(provide :calypso/joystick "4ea7417bf6c4ea7f9c68a7b66f76e96c")


