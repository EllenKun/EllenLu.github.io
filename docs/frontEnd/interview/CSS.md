# CSS啥也不会

### CSS盒模型
  盒模型 = content + padding + margin + border  
  有两种：
  + W3C标准盒模型: width&height只包含**content**  
  + IE盒模型: width&height包含**content+border+padding**  
  
  可以通过修改元素的box-sizing属性来改变元素的盒模型。box-sizing默认content-box(W3C),border-box(IE)


### CSS选择符
  1. id选择器 #id 
  2. class选择器 .class-name
  3. 标签选择器 p div span
  4. 后代选择器 div p
  5. 子选择器 ul>li
  6. 兄弟选择器 div~span
  7. 相邻兄弟选择器 div+span
  8. 属性选择器 
  9. 伪类选择器 a:hover li:nth-child
  10. 伪元素选择器 ::before ::after

### 伪类和为元素
伪类一般匹配的是元素的一些特殊状态，如hover、link等，根据用户行为而动态变化  
伪元素一般匹配的特殊的位置，比如after、before等，创建一些不在文档树中的元素，并为其添加样式。比如在元素前增加文本，并为文本添加样式  

### 水平垂直居中
1. flex布局
    ```css
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```
2. 绝对定位
   ```css
   .parent {
    position: relative;
   }
   .child {
    position: absolute;
    margin:auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
   }
   ```

3. 绝对定位+transform
    ```css
    .parent {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
    ```

### position的值
1. static: 默认值，常规文档流
2. relative: 常规文档流，根据自身位置偏移
3. absolute: 绝对定位元素，相对于值不为static的第一个父元素的padding box进行定位，脱离文档流
4. fixed: 相对于浏览器视窗进行定位，脱离文档流
5. inherit: 从父元素继承position属性的值

### flex布局
flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。  
容器属性： 
> flex-direction：决定主轴的方向  
> flex-wrap：换行方式  
> flex-flow：direction+wrap  
> justify-content：在主轴上的对齐方式  
> align-items：交叉轴上对齐方式  
> align-content：多根轴线的对齐方式  

项目属性：
> order：项目的排列顺序。数值越小，排列越靠前，默认为0  
> flex-grow：项目的放大比例，默认为0，即如果存在剩余空间，也不放大  
> flex-shrink：项目的缩小比例，默认为1，即如果空间不足，该项目将缩小  
> flex-basis：在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。默认值为auto，即项目的本来大小  


### margin和padding使用场景
margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。  
使用margin：
+ 需要在border外侧添加空白时。
+ 空白处不需要背景（色）时。
+ 上下相连的两个盒子之间的空白，需要相互抵消时。如15px+20px的margin，将得到20px的空白。

使用padding：
+ 需要在border内测添加空白时。
+ 空白处需要背景（色）时。
+ 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。