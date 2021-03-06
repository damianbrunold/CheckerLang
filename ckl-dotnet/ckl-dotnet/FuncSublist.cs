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
    public class FuncSublist : FuncBase
    {
        public FuncSublist() : base("sublist")
        {
            info = "sublist(lst, startidx)\r\n" +
                   "sublist(lst, startidx, endidx)\r\n" +
                   "\r\n" +
                   "Returns the sublist starting with startidx. If endidx is provided,\r\n" +
                   "this marks the end of the sublist. Endidx is not included.\r\n" +
                   "\r\n" +
                   ": sublist([1, 2, 3, 4], 2) ==> [3, 4]\r\n";
        }
        
        public override List<string> GetArgNames()
        {
            return new List<string> {"lst", "startidx", "endidx"};
        }
        
        public override Value Execute(Args args, Environment environment, SourcePos pos)
        {
            if (args.IsNull("lst")) return ValueNull.NULL;
            var value = args.GetList("lst").GetValue();
            var start = (int) args.GetInt("startidx").GetValue();
            if (start < 0) start = value.Count + start;
            if (start > value.Count) return new ValueList();
            var end = (int) args.GetInt("endidx", value.Count).GetValue();
            if (end < 0) end = value.Count + end;
            if (end > value.Count) end = value.Count;
            var result = new ValueList();
            for (var i = start; i < end; i++)
            {
                result.AddItem(value[i]);
            }
            return result;
        }
    }
}