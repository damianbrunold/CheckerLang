/*  Copyright (c) 2021 Damian Brunold, Gesundheitsdirektion Kanton Zürich

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
package ch.checkerlang.values;

import ch.checkerlang.nodes.Node;

public class ValueNode extends Value {
    private Node value;

    public ValueNode(Node value) {
        this.value = value;
    }

    public Node getValue() {
        return value;
    }

    public boolean isEquals(Value value) {
        if (!value.isNode()) return false;
        return value.toString().equals(toString());
    }

    public int compareTo(Value value) {
        return toString().compareTo(value.toString());
    }

    public int hashCode() {
        return toString().hashCode();
    }

    public String type() {
        return "node";
    }

    public ValueNode asNode() { return this; }

    public ValueString asString() {
        return new ValueString(toString());
    }

    public boolean isNode() {
        return true;
    }

    public String toString() {
        return value.toString();
    }

}
