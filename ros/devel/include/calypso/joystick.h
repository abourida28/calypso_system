// Generated by gencpp from file calypso/joystick.msg
// DO NOT EDIT!


#ifndef CALYPSO_MESSAGE_JOYSTICK_H
#define CALYPSO_MESSAGE_JOYSTICK_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace calypso
{
template <class ContainerAllocator>
struct joystick_
{
  typedef joystick_<ContainerAllocator> Type;

  joystick_()
    : lx(0.0)
    , ly(0.0)  {
    }
  joystick_(const ContainerAllocator& _alloc)
    : lx(0.0)
    , ly(0.0)  {
  (void)_alloc;
    }



   typedef double _lx_type;
  _lx_type lx;

   typedef double _ly_type;
  _ly_type ly;





  typedef boost::shared_ptr< ::calypso::joystick_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::calypso::joystick_<ContainerAllocator> const> ConstPtr;

}; // struct joystick_

typedef ::calypso::joystick_<std::allocator<void> > joystick;

typedef boost::shared_ptr< ::calypso::joystick > joystickPtr;
typedef boost::shared_ptr< ::calypso::joystick const> joystickConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::calypso::joystick_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::calypso::joystick_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::calypso::joystick_<ContainerAllocator1> & lhs, const ::calypso::joystick_<ContainerAllocator2> & rhs)
{
  return lhs.lx == rhs.lx &&
    lhs.ly == rhs.ly;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::calypso::joystick_<ContainerAllocator1> & lhs, const ::calypso::joystick_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace calypso

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::calypso::joystick_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::calypso::joystick_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::calypso::joystick_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::calypso::joystick_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::calypso::joystick_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::calypso::joystick_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::calypso::joystick_<ContainerAllocator> >
{
  static const char* value()
  {
    return "4ea7417bf6c4ea7f9c68a7b66f76e96c";
  }

  static const char* value(const ::calypso::joystick_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x4ea7417bf6c4ea7fULL;
  static const uint64_t static_value2 = 0x9c68a7b66f76e96cULL;
};

template<class ContainerAllocator>
struct DataType< ::calypso::joystick_<ContainerAllocator> >
{
  static const char* value()
  {
    return "calypso/joystick";
  }

  static const char* value(const ::calypso::joystick_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::calypso::joystick_<ContainerAllocator> >
{
  static const char* value()
  {
    return "float64 lx\n"
"float64 ly\n"
;
  }

  static const char* value(const ::calypso::joystick_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::calypso::joystick_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.lx);
      stream.next(m.ly);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct joystick_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::calypso::joystick_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::calypso::joystick_<ContainerAllocator>& v)
  {
    s << indent << "lx: ";
    Printer<double>::stream(s, indent + "  ", v.lx);
    s << indent << "ly: ";
    Printer<double>::stream(s, indent + "  ", v.ly);
  }
};

} // namespace message_operations
} // namespace ros

#endif // CALYPSO_MESSAGE_JOYSTICK_H
