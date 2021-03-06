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
package ch.checkerlang.nodes;

import ch.checkerlang.Environment;
import ch.checkerlang.functions.FuncLambda;
import ch.checkerlang.SourcePos;
import ch.checkerlang.values.Value;

import java.util.Collection;

public class NodeDef implements Node {
    private String identifier;
    private Node expression;

    private String info;
    private SourcePos pos;

    public NodeDef(String identifier, Node expression, String info, SourcePos pos) {
        this.identifier = identifier;
        this.expression = expression;
        this.info = info;
        this.pos = pos;
    }

    public Value evaluate(Environment environment) {
        Value value = expression.evaluate(environment);
        value.info = info;
        environment.put(identifier, value);
        if (value.isFunc() && value instanceof FuncLambda) ((FuncLambda) value).setName(identifier);
        return value;
    }

    public String toString() {
        return "(def " + identifier + " = " + expression + ")";
    }

    public void collectVars(Collection<String> freeVars, Collection<String> boundVars, Collection<String> additionalBoundVars) {
        expression.collectVars(freeVars, boundVars, additionalBoundVars);
        boundVars.add(identifier);
    }

    public String getIdentifier() {
        return identifier;
    }

    public SourcePos getSourcePos() {
        return pos;
    }

    public boolean isLiteral() {
        return false;
    }
}
