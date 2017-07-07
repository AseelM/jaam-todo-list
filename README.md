# Marmalade ( the todo app )
Our task for this week was to create a todo-style web app, which in keeping with the jam theme we called **Marmalade**.

Marmalade needed to have a simple functionality which allowed its users to roughly jot down short notes and reminders for themselves which are then appended to the site as a `<li>`. These reminders can then be **marked as completed** or **deleted** using interactive elements such as `<input type="checkbox">` and `<button>`.

## Introduction
The task this week was to utilise best-practice **TDD** or **test-driven development** to make this app.

We decided to spend the first hour dividing up the work, and trying to understand what was being asked of us. After last week we were keen to have **more communication** between us as a four - making sure that we all understood the different elements of the code we would be writing, and that we changed pairs more often.

We also wrote some initial code, like **HTML** and **CSS templates**, so that we all had a solid base to work from before splitting off to our seperate feature branches in pairs. We made a few initial tests in our _test.js_ file - one testing that the **Tape** testing framework was functioning as it should, and one checking that the argument we were passing in `todos` was an array of objects as it should be. At this point we split off into pairs.

## (il)logical.js
The experience we had with TDD felt pretty frustrating and counter-intuitive at first. The initial `logic.js` file seemed fairly simple to write when we first looked at it. What was most challenging was trying to write the tests for **every granular aspect** of our functions. It felt pedantic and tedious checking for things like 
> Does one *really* equal one??

or
> Is the argument that is DEFINITELY an array really an array?

We all learnt that for **any** function you can write, there are at least **two or three different tests** you can write to compliment it (_or_ to needlessly complicate matters and confuse yourself depending on how you look at it). The fairly simple layout of `logic.js` was offset by the time-consuming task of writing `test.js`. 

![GIF illustration of our mental frustrations](https://media.giphy.com/media/z1GQ9t8FxipnG/giphy.gif "WHY")

## `dom.js`
Once the crux of the `logic.js` file was completed, we moved on to the `dom.js` file, which was how we linked the javascript to the HTML. This was also pretty challenging. Working from somebody else's template really highlighted the need for **clear, (self)-explanatory code**, and how something that seems **pretty obvious** for somebody writing the code can seem **completely confusing** for someone adding to it/coming to it at a later date.

It was not until this stage that the advantages of writing code using a **test-driven** methodology became apparent. Because we had written these tests thoroughly checking every aspect of our functions, we were able to have a little more faith in these functions when our `dom.js` file wasn't linking things properly.

If something wasn't working as expected, we could go back to the tests to double check their accuracy. So long as these were **pure functions** we were working from, we could be sure that this foundation was working. **This made our debugging process a lot faster**.
