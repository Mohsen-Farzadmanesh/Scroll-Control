### What's This?

Using this tool, you can display your elements by **scrolling** the page.

First you need to attach the **Scroll-Control.js** file to the HTML page.

```
<script src="./Scroll-Control.js"></script>
```

you need to write your element in HTML and give it a Scroll-Control class.
Then give it a scrollcnt attribute and set its value to **defult**.

```
<div class="content Scroll-Control" scrollcnt="defult">
            <img src="./img/img-2.jpg" alt="" />
</div>
```

Now give the element the style you want and hide it the way you like.

Then show it for the case where the element of the class is **active**.

```
.content {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
}

.content.active {
      opacity: 1;
      transition: 0.7s;
}
```

Leave the rest to the library.
### ***Made by [Mohsen Farzadmanesh](https://github.com/Mohsen-Farzadmanesh) with love :)***