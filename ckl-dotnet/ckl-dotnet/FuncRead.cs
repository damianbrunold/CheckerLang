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
using System.Collections.Generic;

namespace CheckerLang
{
    public class FuncRead : FuncBase
    {
        public FuncRead() : base("read")
        {
            info = "read(input = stdin)\r\n" +
                   "\r\n" +
                   "Read a character from the input. If end of input is reached, an empty string is returned.\r\n" +
                   "\r\n" +
                   ": def s = str_input('hello'); read(s) ==> 'h'\r\n";
        }
        
        public override List<string> GetArgNames()
        {
            return new List<string> {"input"};
        }
        
        public override Value Execute(Args args, Environment environment, SourcePos pos)
        {
            var input = args.GetInput("input", environment.Get("stdin", pos).AsInput());
            var ch = input.Read();
            if (ch == null) return ValueNull.NULL;
            return new ValueString(ch);
        }
    }
}