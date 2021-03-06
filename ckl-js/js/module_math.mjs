export const modulemath = `
# Copyright (c) 2021 Damian Brunold, Gesundheitsdirektion Kanton Zürich
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

bind_native("E");
bind_native("PI");

bind_native("acos");
bind_native("asin");
bind_native("atan");
bind_native("atan2");
bind_native("cos");
bind_native("exp");
bind_native("log");
bind_native("pow");
bind_native("sin");
bind_native("sqrt");
bind_native("tan");


"
abs(n) 

Returns the absolute value of n.

: abs(2) ==> 2
: abs(-3) ==> 3
"
def abs(n) do
  if is_null(n) then NULL
  if not is_numeric(n) then error("argument is not numerical (" + type(n) + ")")
  if n < 0 then - n
  else n;
end;


"
sign(n) 

Returns the signum of n

: sign(2) ==> 1
: sign(-3) ==> -1
"
def sign(n) do
  if is_null(n) then NULL
  if not is_numeric(n) then error("argument is not numerical (" + type(n) + ")")
  if n < 0 then -1
  if n > 0 then 1
  else 0;
end;


"
log2(x)

Returns the logarithm of x to base 2.

: int(log2(1024)) ==> 10
"
def log2(x) round(log(x) / log(2), 12);


"
log10(x)

Returns the logarithm of x to base 10.

: int(log10(1000)) ==> 3
"
def log10(x) round(log(x) / log(10), 12);


"
is_even(n)

Returns TRUE if the number is even.

: is_even(2) ==> TRUE
: is_even(3) ==> FALSE
"
def is_even(n) do
  if not is_numeric(n) then return FALSE;
  return n % 2 == 0;
end;


"
is_odd(n)

Returns TRUE if the number is odd.

: is_odd(2) ==> FALSE
: is_odd(3) ==> TRUE
"
def is_odd(n) do
  if not is_numeric(n) then return FALSE;
  return n % 2 == 1;
end;


"
gcd(a, b)

Calculates the greatest common divisor of two
integers a and b.

Use reduce([a, b, ...], gcd) to calculate the gcd
of more than two values.

: gcd(2 * 3, 2 * 2) ==> 2
: gcd(2 * 2  * 3 * 5, 2  * 3 * 5) ==> 30
: reduce([2 * 2 * 3 * 5, 2 * 3 * 3, 2 * 3 * 5 * 7], gcd) ==> 6
"
def gcd(a, b) do
    if b == 0 then a
    else gcd(b, a % b)
end;


"
lcm(a, b)

Calculates the least common multiple of two
integers a and b.

Use reduce([a, b, ...], lcm) to calculate the lcm
of more than two values.

: lcm(2 * 2 * 2 * 3, 2 * 2 * 3 * 3) ==> 72
"
def lcm(a, b) a * b / gcd(a, b);

`;
