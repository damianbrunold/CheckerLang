export const moduleset = `
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

"
union(seta, setb)

Returns the union of the two sets. Also works for lists.

: union(<<1, 2, 3>>, <<2, 3, 4>>) ==> <<1, 2, 3, 4>>
: union([1, 2, 3], [2, 3, 4]) ==> <<1, 2, 3, 4>>
: union(<<1, 2>>, <<3, 4>>) ==> <<1, 2, 3, 4>>
: union(<<1, 2>>, <<>>) ==> <<1, 2>>
"
def union(seta, setb) do
    def result = <<>>;
    result !> append_all(seta);
    result !> append_all(setb);
    return result;
end;


"
intersection(seta, setb)

Returns the intersection of the two sets. Also works for lists.

: intersection(<<1, 2, 3>>, <<2, 3, 4>>) ==> <<2, 3>>
: intersection([1, 2, 3], [2, 3, 4]) ==> <<2, 3>>
: intersection(<<1, 2>>, <<3, 4>>) ==> <<>>
: intersection(<<1, 2>>, <<>>) ==> <<>>
"
def intersection(seta, setb) do
    def result = <<>>;
    for a in seta do
        if a in setb then result !> append(a);
    end;
    return result;
end;


"
diff(seta, setb)

Returns the difference between seta and setb, i.e. a set
containing all elements in seta, which are not in setb.
Also works for lists.

: diff(<<1, 2, 3, 4>>, <<3, 4>>) ==> <<1, 2>>
: diff([1, 2, 3, 4], [3, 4]) ==> <<1, 2>>
: diff(<<1, 2, 3, 4>>, <<>>) ==> <<1, 2, 3, 4>>
: diff(<<1, 2, 3, 4>>, <<1, 2, 3, 4>>) ==> <<>>
"
def diff(seta, setb) do
    def result = <<>>;
    for a in seta do
        if a not in setb then result !> append(a);
    end;
    return result;
end;


"
symmetric_diff(seta, setb)

Returns a set containing all elements of seta and setb,
which are either only in seta, or only in setb contained.
Also works for lists.

: symmetric_diff(<<1, 2, 3, 4>>, <<3, 4, 5, 6>>) ==> <<1, 2, 5, 6>>
"
def symmetric_diff(seta, setb) do
    union(diff(seta, setb), diff(setb, seta));
end;

`;
