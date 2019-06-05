function viewOnlyChanged()
{
    var a = $("#d2_a");
}

function gen_tree(n)
{
    this.c = [];
    this.n = n;
    this.e = {'color':0,'attr':{'class':[]}};
    this.color = 0;
    this.issort = 1;
}

function ismember(a,n)
{
    for (var i in a)
    {
        if (a[i] == n)
            return 1;
    }
    return 0;
}

gen_tree.prototype.genar = function(a)
{
    var n = [];
    for (var e of a) {
        var c = new gen_tree(e['n']);
        n.push(c);
        c.e = e;
        if ('c' in e) {
            c.genar(e.c);
        }
    }
    this.c = this.c.concat(n);
}

gen_tree.prototype.gen = function(na,e)
{
    var _n = [...na]
    var n = _n.shift();
    var c = this.c.find(function(a) { return a.n == n });
    if (c == undefined)
    {
        c = new gen_tree(n);
        this.c.push(c);
    }
    if (this.issort) {
        this.c.sort(function(a, b) { return ('' + a.n).localeCompare(b.n); });
    }
    if (_n.length != 0)
    {
        c.gen(_n,e);
        if (e != undefined)
            c.e.color |= e.color;
    } else {
        c.e = e;
    }
}

function converthexcolor(a)
{
    var k = ""; var i;
    for (i = 0; i < 6;  i++ )
    {
        var j = a & 0xf; a >>= 4;
        k = j.toString(16)+k;
    }
    return k;
}

gen_tree.prototype.htmlid = function(na)
{
    var id = "undef";
    if (this.e != undefined &&
        'path' in this.e)
    {
        id = this.e['path'];
        id = id.replace(/[\/\s\.@:]/ig, "_");
    }
    return id;
}

gen_tree.prototype.selector = function(na)
{
    var id = this.htmlid();
    if (!id.startsWith("#"))
    {
        id = "#" + id;
    }
    return id;
}

gen_tree.prototype.getli = function(na)
{
    var id = this.selector();
    var e = $(id);
}

gen_tree.prototype.htmlchilds = function(na)
{
    var c = [];
    for (var i in this.c)
    {
        var e = this.c[i];
        c.push(e.html(na));
    }
    var l = c.join("\n");
    var ul = "<ul> " + l + "</ul>";
    var id = this.selector();
    var e = $(id+" ul").replaceWith(ul);
}

gen_tree.prototype.isinstantiated = function(na)
{
    var id = this.selector();
    var e = $(id);
    return (e.length);
}

gen_tree.prototype.reinstantiate = function(na)
{
    var dirty = 0;
    for (var i in this.c)
    {
        var e = this.c[i];
        if (! e.isinstantiated()) {
            dirty = 1;
        }
    }
    if (dirty)
    {
        console.log("Need instance of child "+this.htmlid());
        this.htmlchilds(na);
    }
    else
    {
        console.log("Instance "+this.htmlid());
    }
    for (var i in this.c)
    {
        var e = this.c[i];
        e.reinstantiate(na);
    }
}

gen_tree.prototype.html = function(na)
{
    var c = [];
    for (var i in this.c) {
        var e = this.c[i];
        c.push(e.html(na));
    }
    var func = 'noop'; var arg0 = ""; var arg1 = "file";
    var a = ['expanded'];
    if (this.e != undefined &&
        'attr' in this.e &&
        'class' in this.e['attr'])
    {
        var toadd = this.e['attr']['class'];
        func = toadd[0];
        if ('dir' in toadd) {
            arg1 = 'dir';
        }
        arg0 = this.e['path'];
        a = a.concat(toadd);
    }
    var col = "";

    if (this.e != undefined && (this.e.color && !ismember(this.e.attr.class,'file')))
    {
        col = 0xffffff;
        if (this.e.color & 0x2) { // grey
            col -= 0x101010;
        } else if (this.e.color & 0x4) { // green
            col -= 0x300030;
        } else if (this.e.color & 0x1) { // red
            col -= 0x003030;
        }
        col = converthexcolor(col);
        console.log(col);
        col = "background-color:#"+col;
    }

    var l = c.join("\n");
    var id = this.htmlid();
    var args = [arg0, arg1].map(function(a) { return "\""+a+"\""; }).join(",");
    return "<li id=\""+id+"\" ><span class=\""+a.join(" ")+"\"><a style=\""+col+"\" onclick='"+func+"("+args+")' >" + this.n + "</a></span><ul> " + l + "</ul></li>";
}


function propagate(e,r,g,b) {

}
