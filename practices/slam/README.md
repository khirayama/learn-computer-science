## 雑記

- ROSをMacにインストール
  - [Mac で ROS の環境構築 - Yura YuLife](https://yura2.hateblo.jp/entry/2016/11/09/Mac_%E3%81%A7_ROS_%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89)
  - [kinetic/Installation/OSX/Homebrew/Source - ROS Wiki](http://wiki.ros.org/kinetic/Installation/OSX/Homebrew/Source)
    - [brew tap ros/deps fails because gfortran.rb uses MacOS.prefer_64_bit? directive · Issue #36 · ros/homebrew-deps](https://github.com/ros/homebrew-deps/issues/36)
    - [macOS Mojaveにros kineticをインストール - Qiita](https://qiita.com/watakandai/items/f19f42929193ee45e39c)
  - 無理そう
- Dockerを利用
  - [Docker上でGUIのROS1/ROS2を一瞬でセットアップする方法 - Qiita](https://qiita.com/karaage0703/items/957bdc7b4dabfc6639da)
    - まじで一瞬だった。ひとまずこれでやる
  - [docker/Tutorials/Docker - ROS Wiki](http://wiki.ros.org/docker/Tutorials/Docker)
  - [OSXのdocker環境でROSを動かしてみる - Qiita](https://qiita.com/mechamogera/items/1de9a49306087936d954)
    - なんかうまくいかない
  - [Docker for Mac で X11 アプリケーションを動かす - Qiita](https://qiita.com/hoto17296/items/bdb2ab24bc32b6b7f360)
    - XQuartzとDockerの動作確認
      - できた
- ROSでなにやる
  - [ROSの開発環境を構築するkinetic編 - ふまじめロボット倶楽部](http://dashimaki360.hatenablog.com/entry/2018/01/08/235959)
  - [ROS_11:基本　ROSのサンプルを使ってみる。(turtleSim) - Qiita](https://qiita.com/NWLab/items/687bbac01e69301e24c5)
    - これでtutlesimがキーボードで動かせた
  - [ROSプログラミング・ガイド](https://tail-island.github.io/six_point_two_eight/)
  - [ROS講座00 目次 - Qiita](https://qiita.com/srs/items/5f44440afea0eb616b4a)
    - これよさそう
  - [初めてのROS（ROSチュートリアルを使って） | Tokyo Opensource Robotics Kyokai Association | Tokyo Opensource Robotics Kyokai Association](https://opensource-robotics.tokyo.jp/?p=4450)
  - [Turtlebot3の実機を使ったSLAMとNavigationをAWS RoboMaker上でやってみた - aptpod Tech Blog](https://tech.aptpod.co.jp/entry/2020/07/03/100000#%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7SLAMNavigation%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99%E3%81%9F%E3%82%81%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AAROS%E3%83%88%E3%83%94%E3%83%83%E3%82%AF%E3%82%92%E8%AA%BF%E3%81%B9%E3%82%8B)
  - [ROS MelodicでTurtlebot3をGazeboで動かしてついでにSLAMする - Qiita](https://qiita.com/protocol1964/items/1e63aebddd7d5bfd0d1b)
    - SLAMやるのに良さそうなのでやってみる
- トラブルシューティング
  - [ROS環境におけるChoreonoidの実行 - Choreonoid 開発版 ドキュメント](https://choreonoid.org/ja/manuals/latest/ros/run-choreonoid.html#id8)
    - 補足: roslaunch の実行に失敗する場合の対処方法
- 書籍
  - [O'Reilly Japan - プログラミングROS](https://www.oreilly.co.jp/books/9784873118093/)
    - ひとまずこれ使うのがよさそう
- 調べ物
  - [melodic - ROS Wiki](http://wiki.ros.org/melodic)
- 見たリンク
  - [TurtleBot3](https://emanual.robotis.com/docs/en/platform/turtlebot3/simulation/#ros-1-simulation)
  - [turtlebot3_manipulation/turtlebot3_manipulation_slam at master · ROBOTIS-GIT/turtlebot3_manipulation](https://github.com/ROBOTIS-GIT/turtlebot3_manipulation/tree/master/turtlebot3_manipulation_slam)
  - [Mac で ROS の環境構築 - Yura YuLife](https://yura2.hateblo.jp/entry/2016/11/09/Mac_%E3%81%A7_ROS_%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89)
    - うまくできなかったので、公式に
      - [kinetic/Installation/OSX/Homebrew/Source - ROS Wiki](http://wiki.ros.org/kinetic/Installation/OSX/Homebrew/Source)
  - [ROS環境のインストールとセットアップ - ROS Wiki](http://wiki.ros.org/ja/ROS/Tutorials/InstallingandConfiguringROSEnvironment)
  - [Besttechnology - Turtlebot3 Burger](https://www.besttechnology.co.jp/modules/onlineshop/index.php?fct=photo&p=192)
  - [Turtlebot3の実機を使ったSLAMとNavigationをAWS RoboMaker上でやってみた - aptpod Tech Blog](https://tech.aptpod.co.jp/entry/2020/07/03/100000)
  - [kinetic/Installation/OSX/Homebrew/Source - ROS Wiki](http://wiki.ros.org/kinetic/Installation/OSX/Homebrew/Source)

## 開発環境確認

- [x] Docker & XQuartzの動作を確認する
  - [Docker for Mac で X11 アプリケーションを動かす - Qiita](https://qiita.com/hoto17296/items/bdb2ab24bc32b6b7f360)
- [x] Docker & XQuartz環境でROSが動く状態にする
  - [Docker for MacでROSの亀さんと戯れた - Qiita](https://qiita.com/ryo_21/items/4e0006adcb300173acda)
    - 最初に確認に使ったDocker & XQuartz環境を元にこれでturtlesimを動かす
    - 最初のができて、これができない場合、ほぼROSのせい

- メモ
  - XQuartz with Docker
    - xeyes [Docker for Mac で X11 アプリケーションを動かす - Qiita](https://qiita.com/hoto17296/items/bdb2ab24bc32b6b7f360)
      - `Open -a XQuartz`
      - `docker build -t xeyes .` with the content of Dockerfile.xeyes
      - `docker run --rm -e DISPLAY=$(hostname):0 -v ~/.Xauthority:/root/.Xauthority xeyes`
    - firefox [docker上で起動したfirefoxをホスト側で操作する - takapiのブログ](https://takapi86.hatenablog.com/entry/2019/03/24/144008)
      - `Open -a XQuartz`
      - `docker build -t xeyes .` with the content of Dockerfile.firefox
      - `docker run --rm -e DISPLAY=$(hostname):0 -v ~/.Xauthority:/root/.Xauthority firefox`

## 開発環境構築

```
docker build -t ros-tutorials .
```

## 開発

Mainの立ち上げ

```
open -a XQuartz
HOST_IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
docker run --rm -e DISPLAY=$HOST_IP:0 -v ~/.Xauthority:/root/.Xauthority -v $(pwd)/catkin_ws:/root/catkin_ws --name ros-test ros-tutorials roscore
```

Docker Container内で作業するため以下で端末の立ち上げ

```
docker exec -it ros-test bin/bash
```

コンテナ内部で読み込み

```
source opt/ros/kinetic/setup.bash
```

## 学習

- [ ] turtlesimをコードで動かす
  - [ROS turtlesimを自動的に動かすプログラムの作成 - Symfoware](https://symfoware.blog.fc2.com/blog-entry-2284.html)
