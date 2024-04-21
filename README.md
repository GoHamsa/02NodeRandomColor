# Tasks breakdown

## 1. Form in random color

[x] 1. output the form (the #-table) via formula, w/o color
[] 2. output random color, w/o form
[] 3. output form, in random color
[] 4. ..., with HexCode stated inside

## 2. Determined color and vue

[] 5. output color, determined by input
[] 6. output color & vue, determined by input
[] 7. output form in color & vue, incl. HexCode inside

# Tasks

1. create index.js, contains code, creates table of 31x9 # with a random color.
   Thus, typing node index.js in console, should trigger it!
   a) lines 1-3 just 31x#
   b) 1 line 5x#, 21x[empty], 5x#
   or line 4 1-5 #, 6-26 [empty], 27-31 #
   c) 1 line 5x#, 7x[empty], HexCode (= 7 characters), 7x[empty], 5x#
   or line 5 1-5 #, 6-12[empty], HexCode (= 7 characters), 7x[empty], 5x#
   d) = b)
   e) = a)
   so the 9 lines...
   a 3
   b 1
   c 1
   b 1
   a 3

2. user input in console, should be registere via Argv[2], taking 2 arguments:
   a) color
   b) hue (dark, bright, etc.)
   then again gives you the above pattern, but with determined color, instead of random.

Create an application that will return a random color in the command line.

# It should work like this:

When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

# It should look pretty close to this:

> node index.js

        # ###############################
        # ###############################
        # ###############################
        # #####                     #####
        # #####       #edff28       #####
        # #####                     #####
        # ###############################
        # ###############################
        # ###############################

###########

In addition to node index.js, it should also be able to accept the request for a:

hue (e.g. green or red or blue)
luminosity (e.g. light or dark)
...and then generate random colors that match those choices.

For example:

> node index.js blue dark

        # ###############################
        # ###############################
        # ###############################
        # #####                     #####
        # #####       #edff28       #####
        # #####                     #####
        # ###############################
        # ###############################
        # ###############################

# Create a test file that will run index.js from the project

        # with Node.js and check that it roughly matches the
        # following pattern (9 rows, 31 columns, with a space in the
        # center and a hex code in the middle):
        #
        # ###############################
        # ###############################
        # ###############################
        # #####                     #####
        # #####       #edff28       #####
        # #####                     #####
        # ###############################
        # ###############################
        # ###############################
        #
        # The pattern will be matched in a forgiving way:
        # - Unlimited number of spaces at the start of each line
        # - Minimum 1 # character left and right border
        # - Minimum 1 # character top and bottom border
        # - Minimum 1 space surrounding the hex code
        # - Minimum 11 columns
        # - Minimum 5 rows