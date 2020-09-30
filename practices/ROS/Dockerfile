FROM ros:kinetic

RUN sudo apt-get update \
  && sudo apt-get install -y ros-kinetic-ros-tutorials ros-kinetic-common-tutorials ros-kinetic-desktop-full \
  && rm -rf /var/lib/apt/lists/
RUN mkdir -p ~/catkin_ws/src
