FROM ros:kinetic
# install ros tutorials packages
RUN apt-get update && apt-get install -y
RUN apt-get install -y ros-kinetic-ros-tutorials \
    ros-kinetic-common-tutorials \
    && rm -rf /var/lib/apt/lists/
