"use strict";
function ECB(a, b) {
    this.count = a, this.dataCodewords = b, this.__defineGetter__("Count", function () {
        return this.count
    }), this.__defineGetter__("DataCodewords", function () {
        return this.dataCodewords
    })
}
function ECBlocks(a, b, c) {
    this.ecCodewordsPerBlock = a, this.ecBlocks = c ? new Array(b, c) : new Array(b), this.__defineGetter__("ECCodewordsPerBlock", function () {
        return this.ecCodewordsPerBlock
    }), this.__defineGetter__("TotalECCodewords", function () {
        return this.ecCodewordsPerBlock * this.NumBlocks
    }), this.__defineGetter__("NumBlocks", function () {
        for (var a = 0, b = 0; b < this.ecBlocks.length; b++)a += this.ecBlocks[b].length;
        return a
    }), this.getECBlocks = function () {
        return this.ecBlocks
    }
}
function Version(a, b, c, d, e, f) {
    this.versionNumber = a, this.alignmentPatternCenters = b, this.ecBlocks = new Array(c, d, e, f);
    for (var g = 0, h = c.ECCodewordsPerBlock, i = c.getECBlocks(), j = 0; j < i.length; j++) {
        var k = i[j];
        g += k.Count * (k.DataCodewords + h)
    }
    this.totalCodewords = g, this.__defineGetter__("VersionNumber", function () {
        return this.versionNumber
    }), this.__defineGetter__("AlignmentPatternCenters", function () {
        return this.alignmentPatternCenters
    }), this.__defineGetter__("TotalCodewords", function () {
        return this.totalCodewords
    }), this.__defineGetter__("DimensionForVersion", function () {
        return 17 + 4 * this.versionNumber
    }), this.buildFunctionPattern = function () {
        var a = this.DimensionForVersion, b = new BitMatrix(a);
        b.setRegion(0, 0, 9, 9), b.setRegion(a - 8, 0, 8, 9), b.setRegion(0, a - 8, 9, 8);
        for (var c = this.alignmentPatternCenters.length, d = 0; c > d; d++)for (var e = this.alignmentPatternCenters[d] - 2, f = 0; c > f; f++)0 == d && (0 == f || f == c - 1) || d == c - 1 && 0 == f || b.setRegion(this.alignmentPatternCenters[f] - 2, e, 5, 5);
        return b.setRegion(6, 9, 1, a - 17), b.setRegion(9, 6, a - 17, 1), this.versionNumber > 6 && (b.setRegion(a - 11, 0, 3, 6), b.setRegion(0, a - 11, 6, 3)), b
    }, this.getECBlocksForLevel = function (a) {
        return this.ecBlocks[a.ordinal()]
    }
}
function buildVersions() {
    return new Array(new Version(1, new Array, new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))), new Version(2, new Array(6, 18), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))), new Version(3, new Array(6, 22), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, new ECB(2, 13))), new Version(4, new Array(6, 26), new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))), new Version(5, new Array(6, 30), new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))), new Version(6, new Array(6, 34), new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))), new Version(7, new Array(6, 22, 38), new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))), new Version(8, new Array(6, 24, 42), new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))), new Version(9, new Array(6, 26, 46), new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))), new Version(10, new Array(6, 28, 50), new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))), new Version(11, new Array(6, 30, 54), new ECBlocks(20, new ECB(4, 81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))), new Version(12, new Array(6, 32, 58), new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))), new Version(13, new Array(6, 34, 62), new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))), new Version(14, new Array(6, 26, 46, 66), new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))), new Version(15, new Array(6, 26, 48, 70), new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))), new Version(16, new Array(6, 26, 50, 74), new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))), new Version(17, new Array(6, 30, 54, 78), new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))), new Version(18, new Array(6, 30, 56, 82), new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))), new Version(19, new Array(6, 30, 58, 86), new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))), new Version(20, new Array(6, 34, 62, 90), new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))), new Version(21, new Array(6, 28, 50, 72, 94), new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))), new Version(22, new Array(6, 26, 50, 74, 98), new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))), new Version(23, new Array(6, 30, 54, 74, 102), new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 15), new ECB(14, 16))), new Version(24, new Array(6, 28, 54, 80, 106), new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))), new Version(25, new Array(6, 32, 58, 84, 110), new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(13, 16))), new Version(26, new Array(6, 30, 58, 86, 114), new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))), new Version(27, new Array(6, 34, 62, 90, 118), new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 15), new ECB(28, 16))), new Version(28, new Array(6, 26, 50, 74, 98, 122), new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))), new Version(29, new Array(6, 30, 54, 78, 102, 126), new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, new ECB(19, 15), new ECB(26, 16))), new Version(30, new Array(6, 26, 52, 78, 104, 130), new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))), new Version(31, new Array(6, 30, 56, 82, 108, 134), new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))), new Version(32, new Array(6, 34, 60, 86, 112, 138), new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))), new Version(33, new Array(6, 30, 58, 86, 114, 142), new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))), new Version(34, new Array(6, 34, 62, 90, 118, 146), new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))), new Version(35, new Array(6, 30, 54, 78, 102, 126, 150), new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))), new Version(36, new Array(6, 24, 50, 76, 102, 128, 154), new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))), new Version(37, new Array(6, 28, 54, 80, 106, 132, 158), new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))), new Version(38, new Array(6, 32, 58, 84, 110, 136, 162), new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))), new Version(39, new Array(6, 26, 54, 82, 110, 138, 166), new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))), new Version(40, new Array(6, 30, 58, 86, 114, 142, 170), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16))))
}
function PerspectiveTransform(a, b, c, d, e, f, g, h, i) {
    this.a11 = a, this.a12 = d, this.a13 = g, this.a21 = b, this.a22 = e, this.a23 = h, this.a31 = c, this.a32 = f, this.a33 = i, this.transformPoints1 = function (a) {
        for (var b = a.length, c = this.a11, d = this.a12, e = this.a13, f = this.a21, g = this.a22, h = this.a23, i = this.a31, j = this.a32, k = this.a33, l = 0; b > l; l += 2) {
            var m = a[l], n = a[l + 1], o = e * m + h * n + k;
            a[l] = (c * m + f * n + i) / o, a[l + 1] = (d * m + g * n + j) / o
        }
    }, this.transformPoints2 = function (a, b) {
        for (var c = a.length, d = 0; c > d; d++) {
            var e = a[d], f = b[d], g = this.a13 * e + this.a23 * f + this.a33;
            a[d] = (this.a11 * e + this.a21 * f + this.a31) / g, b[d] = (this.a12 * e + this.a22 * f + this.a32) / g
        }
    }, this.buildAdjoint = function () {
        return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
    }, this.times = function (a) {
        return new PerspectiveTransform(this.a11 * a.a11 + this.a21 * a.a12 + this.a31 * a.a13, this.a11 * a.a21 + this.a21 * a.a22 + this.a31 * a.a23, this.a11 * a.a31 + this.a21 * a.a32 + this.a31 * a.a33, this.a12 * a.a11 + this.a22 * a.a12 + this.a32 * a.a13, this.a12 * a.a21 + this.a22 * a.a22 + this.a32 * a.a23, this.a12 * a.a31 + this.a22 * a.a32 + this.a32 * a.a33, this.a13 * a.a11 + this.a23 * a.a12 + this.a33 * a.a13, this.a13 * a.a21 + this.a23 * a.a22 + this.a33 * a.a23, this.a13 * a.a31 + this.a23 * a.a32 + this.a33 * a.a33)
    }
}
function DetectorResult(a, b) {
    this.bits = a, this.points = b
}
function Detector(a) {
    this.image = a, this.resultPointCallback = null, this.sizeOfBlackWhiteBlackRun = function (a, b, c, d) {
        var e = Math.abs(d - b) > Math.abs(c - a);
        if (e) {
            var f = a;
            a = b, b = f, f = c, c = d, d = f
        }
        for (var g = Math.abs(c - a), h = Math.abs(d - b), i = -g >> 1, j = d > b ? 1 : -1, k = c > a ? 1 : -1, l = 0, m = a, n = b; m != c; m += k) {
            var o = e ? n : m, p = e ? m : n;
            if (1 == l ? this.image[o + p * qrcode.width] && l++ : this.image[o + p * qrcode.width] || l++, 3 == l) {
                var q = m - a, r = n - b;
                return Math.sqrt(q * q + r * r)
            }
            if (i += h, i > 0) {
                if (n == d)break;
                n += j, i -= g
            }
        }
        var s = c - a, t = d - b;
        return Math.sqrt(s * s + t * t)
    }, this.sizeOfBlackWhiteBlackRunBothWays = function (a, b, c, d) {
        var e = this.sizeOfBlackWhiteBlackRun(a, b, c, d), f = 1, g = a - (c - a);
        0 > g ? (f = a / (a - g), g = 0) : g >= qrcode.width && (f = (qrcode.width - 1 - a) / (g - a), g = qrcode.width - 1);
        var h = Math.floor(b - (d - b) * f);
        return f = 1, 0 > h ? (f = b / (b - h), h = 0) : h >= qrcode.height && (f = (qrcode.height - 1 - b) / (h - b), h = qrcode.height - 1), g = Math.floor(a + (g - a) * f), e += this.sizeOfBlackWhiteBlackRun(a, b, g, h), e - 1
    }, this.calculateModuleSizeOneWay = function (a, b) {
        var c = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(a.X), Math.floor(a.Y), Math.floor(b.X), Math.floor(b.Y)), d = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(b.X), Math.floor(b.Y), Math.floor(a.X), Math.floor(a.Y));
        return isNaN(c) ? d / 7 : isNaN(d) ? c / 7 : (c + d) / 14
    }, this.calculateModuleSize = function (a, b, c) {
        return(this.calculateModuleSizeOneWay(a, b) + this.calculateModuleSizeOneWay(a, c)) / 2
    }, this.distance = function (a, b) {
        var c = a.X - b.X, d = a.Y - b.Y;
        return Math.sqrt(c * c + d * d)
    }, this.computeDimension = function (a, b, c, d) {
        var e = Math.round(this.distance(a, b) / d), f = Math.round(this.distance(a, c) / d), g = (e + f >> 1) + 7;
        switch (3 & g) {
            case 0:
                g++;
                break;
            case 2:
                g--;
                break;
            case 3:
                throw"Error"
        }
        return g
    }, this.findAlignmentInRegion = function (a, b, c, d) {
        var e = Math.floor(d * a), f = Math.max(0, b - e), g = Math.min(qrcode.width - 1, b + e);
        if (3 * a > g - f)throw"Error";
        var h = Math.max(0, c - e), i = Math.min(qrcode.height - 1, c + e), j = new AlignmentPatternFinder(this.image, f, h, g - f, i - h, a, this.resultPointCallback);
        return j.find()
    }, this.createTransform = function (a, b, c, d, e) {
        var f, g, h, i, j = e - 3.5;
        null != d ? (f = d.X, g = d.Y, h = i = j - 3) : (f = b.X - a.X + c.X, g = b.Y - a.Y + c.Y, h = i = j);
        var k = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, j, 3.5, h, i, 3.5, j, a.X, a.Y, b.X, b.Y, f, g, c.X, c.Y);
        return k
    }, this.sampleGrid = function (a, b, c) {
        var d = GridSampler;
        return d.sampleGrid3(a, c, b)
    }, this.processFinderPatternInfo = function (a) {
        var b = a.TopLeft, c = a.TopRight, d = a.BottomLeft, e = this.calculateModuleSize(b, c, d);
        if (1 > e)throw"Error";
        var f = this.computeDimension(b, c, d, e), g = Version.getProvisionalVersionForDimension(f), h = g.DimensionForVersion - 7, i = null;
        if (g.AlignmentPatternCenters.length > 0)for (var j = c.X - b.X + d.X, k = c.Y - b.Y + d.Y, l = 1 - 3 / h, m = Math.floor(b.X + l * (j - b.X)), n = Math.floor(b.Y + l * (k - b.Y)), o = 4; 16 >= o; o <<= 1) {
            i = this.findAlignmentInRegion(e, m, n, o);
            break
        }
        var p, q = this.createTransform(b, c, d, i, f), r = this.sampleGrid(this.image, q, f);
        return p = null == i ? new Array(d, b, c) : new Array(d, b, c, i), new DetectorResult(r, p)
    }, this.detect = function () {
        var a = (new FinderPatternFinder).findFinderPattern(this.image);
        return this.processFinderPatternInfo(a)
    }
}
function FormatInformation(a) {
    this.errorCorrectionLevel = ErrorCorrectionLevel.forBits(a >> 3 & 3), this.dataMask = 7 & a, this.__defineGetter__("ErrorCorrectionLevel", function () {
        return this.errorCorrectionLevel
    }), this.__defineGetter__("DataMask", function () {
        return this.dataMask
    }), this.GetHashCode = function () {
        return this.errorCorrectionLevel.ordinal() << 3 | dataMask
    }, this.Equals = function (a) {
        var b = a;
        return this.errorCorrectionLevel == b.errorCorrectionLevel && this.dataMask == b.dataMask
    }
}
function ErrorCorrectionLevel(a, b, c) {
    this.ordinal_Renamed_Field = a, this.bits = b, this.name = c, this.__defineGetter__("Bits", function () {
        return this.bits
    }), this.__defineGetter__("Name", function () {
        return this.name
    }), this.ordinal = function () {
        return this.ordinal_Renamed_Field
    }
}
function BitMatrix(a, b) {
    if (b || (b = a), 1 > a || 1 > b)throw"Both dimensions must be greater than 0";
    this.width = a, this.height = b;
    var c = a >> 5;
    0 != (31 & a) && c++, this.rowSize = c, this.bits = new Array(c * b);
    for (var d = 0; d < this.bits.length; d++)this.bits[d] = 0;
    this.__defineGetter__("Width", function () {
        return this.width
    }), this.__defineGetter__("Height", function () {
        return this.height
    }), this.__defineGetter__("Dimension", function () {
        if (this.width != this.height)throw"Can't call getDimension() on a non-square matrix";
        return this.width
    }), this.get_Renamed = function (a, b) {
        var c = b * this.rowSize + (a >> 5);
        return 0 != (1 & URShift(this.bits[c], 31 & a))
    }, this.set_Renamed = function (a, b) {
        var c = b * this.rowSize + (a >> 5);
        this.bits[c] |= 1 << (31 & a)
    }, this.flip = function (a, b) {
        var c = b * this.rowSize + (a >> 5);
        this.bits[c] ^= 1 << (31 & a)
    }, this.clear = function () {
        for (var a = this.bits.length, b = 0; a > b; b++)this.bits[b] = 0
    }, this.setRegion = function (a, b, c, d) {
        if (0 > b || 0 > a)throw"Left and top must be nonnegative";
        if (1 > d || 1 > c)throw"Height and width must be at least 1";
        var e = a + c, f = b + d;
        if (f > this.height || e > this.width)throw"The region must fit inside the matrix";
        for (var g = b; f > g; g++)for (var h = g * this.rowSize, i = a; e > i; i++)this.bits[h + (i >> 5)] |= 1 << (31 & i)
    }
}
function DataBlock(a, b) {
    this.numDataCodewords = a, this.codewords = b, this.__defineGetter__("NumDataCodewords", function () {
        return this.numDataCodewords
    }), this.__defineGetter__("Codewords", function () {
        return this.codewords
    })
}
function BitMatrixParser(a) {
    var b = a.Dimension;
    if (21 > b || 1 != (3 & b))throw"Error BitMatrixParser";
    this.bitMatrix = a, this.parsedVersion = null, this.parsedFormatInfo = null, this.copyBit = function (a, b, c) {
        return this.bitMatrix.get_Renamed(a, b) ? c << 1 | 1 : c << 1
    }, this.readFormatInformation = function () {
        if (null != this.parsedFormatInfo)return this.parsedFormatInfo;
        for (var a = 0, b = 0; 6 > b; b++)a = this.copyBit(b, 8, a);
        a = this.copyBit(7, 8, a), a = this.copyBit(8, 8, a), a = this.copyBit(8, 7, a);
        for (var c = 5; c >= 0; c--)a = this.copyBit(8, c, a);
        if (this.parsedFormatInfo = FormatInformation.decodeFormatInformation(a), null != this.parsedFormatInfo)return this.parsedFormatInfo;
        var d = this.bitMatrix.Dimension;
        a = 0;
        for (var e = d - 8, b = d - 1; b >= e; b--)a = this.copyBit(b, 8, a);
        for (var c = d - 7; d > c; c++)a = this.copyBit(8, c, a);
        if (this.parsedFormatInfo = FormatInformation.decodeFormatInformation(a), null != this.parsedFormatInfo)return this.parsedFormatInfo;
        throw"Error readFormatInformation"
    }, this.readVersion = function () {
        if (null != this.parsedVersion)return this.parsedVersion;
        var a = this.bitMatrix.Dimension, b = a - 17 >> 2;
        if (6 >= b)return Version.getVersionForNumber(b);
        for (var c = 0, d = a - 11, e = 5; e >= 0; e--)for (var f = a - 9; f >= d; f--)c = this.copyBit(f, e, c);
        if (this.parsedVersion = Version.decodeVersionInformation(c), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == a)return this.parsedVersion;
        c = 0;
        for (var f = 5; f >= 0; f--)for (var e = a - 9; e >= d; e--)c = this.copyBit(f, e, c);
        if (this.parsedVersion = Version.decodeVersionInformation(c), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == a)return this.parsedVersion;
        throw"Error readVersion"
    }, this.readCodewords = function () {
        var a = this.readFormatInformation(), b = this.readVersion(), c = DataMask.forReference(a.DataMask), d = this.bitMatrix.Dimension;
        c.unmaskBitMatrix(this.bitMatrix, d);
        for (var e = b.buildFunctionPattern(), f = !0, g = new Array(b.TotalCodewords), h = 0, i = 0, j = 0, k = d - 1; k > 0; k -= 2) {
            6 == k && k--;
            for (var l = 0; d > l; l++)for (var m = f ? d - 1 - l : l, n = 0; 2 > n; n++)e.get_Renamed(k - n, m) || (j++, i <<= 1, this.bitMatrix.get_Renamed(k - n, m) && (i |= 1), 8 == j && (g[h++] = i, j = 0, i = 0));
            f ^= !0
        }
        if (h != b.TotalCodewords)throw"Error readCodewords";
        return g
    }
}
function DataMask000() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        return 0 == (a + b & 1)
    }
}
function DataMask001() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a) {
        return 0 == (1 & a)
    }
}
function DataMask010() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        return b % 3 == 0
    }
}
function DataMask011() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        return(a + b) % 3 == 0
    }
}
function DataMask100() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        return 0 == (URShift(a, 1) + b / 3 & 1)
    }
}
function DataMask101() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        var c = a * b;
        return(1 & c) + c % 3 == 0
    }
}
function DataMask110() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        var c = a * b;
        return 0 == ((1 & c) + c % 3 & 1)
    }
}
function DataMask111() {
    this.unmaskBitMatrix = function (a, b) {
        for (var c = 0; b > c; c++)for (var d = 0; b > d; d++)this.isMasked(c, d) && a.flip(d, c)
    }, this.isMasked = function (a, b) {
        return 0 == ((a + b & 1) + a * b % 3 & 1)
    }
}
function ReedSolomonDecoder(a) {
    this.field = a, this.decode = function (a, b) {
        for (var c = new GF256Poly(this.field, a), d = new Array(b), e = 0; e < d.length; e++)d[e] = 0;
        for (var f = !1, g = !0, e = 0; b > e; e++) {
            var h = c.evaluateAt(this.field.exp(f ? e + 1 : e));
            d[d.length - 1 - e] = h, 0 != h && (g = !1)
        }
        if (!g)for (var i = new GF256Poly(this.field, d), j = this.runEuclideanAlgorithm(this.field.buildMonomial(b, 1), i, b), k = j[0], l = j[1], m = this.findErrorLocations(k), n = this.findErrorMagnitudes(l, m, f), e = 0; e < m.length; e++) {
            var o = a.length - 1 - this.field.log(m[e]);
            if (0 > o)throw"ReedSolomonException Bad error location";
            a[o] = GF256.addOrSubtract(a[o], n[e])
        }
    }, this.runEuclideanAlgorithm = function (a, b, c) {
        if (a.Degree < b.Degree) {
            var d = a;
            a = b, b = d
        }
        for (var e = a, f = b, g = this.field.One, h = this.field.Zero, i = this.field.Zero, j = this.field.One; f.Degree >= Math.floor(c / 2);) {
            var k = e, l = g, m = i;
            if (e = f, g = h, i = j, e.Zero)throw"r_{i-1} was zero";
            f = k;
            for (var n = this.field.Zero, o = e.getCoefficient(e.Degree), p = this.field.inverse(o); f.Degree >= e.Degree && !f.Zero;) {
                var q = f.Degree - e.Degree, r = this.field.multiply(f.getCoefficient(f.Degree), p);
                n = n.addOrSubtract(this.field.buildMonomial(q, r)), f = f.addOrSubtract(e.multiplyByMonomial(q, r))
            }
            h = n.multiply1(g).addOrSubtract(l), j = n.multiply1(i).addOrSubtract(m)
        }
        var s = j.getCoefficient(0);
        if (0 == s)throw"ReedSolomonException sigmaTilde(0) was zero";
        var t = this.field.inverse(s), u = j.multiply2(t), v = f.multiply2(t);
        return new Array(u, v)
    }, this.findErrorLocations = function (a) {
        var b = a.Degree;
        if (1 == b)return new Array(a.getCoefficient(1));
        for (var c = new Array(b), d = 0, e = 1; 256 > e && b > d; e++)0 == a.evaluateAt(e) && (c[d] = this.field.inverse(e), d++);
        if (d != b)throw"Error locator degree does not match number of roots";
        return c
    }, this.findErrorMagnitudes = function (a, b, c) {
        for (var d = b.length, e = new Array(d), f = 0; d > f; f++) {
            for (var g = this.field.inverse(b[f]), h = 1, i = 0; d > i; i++)f != i && (h = this.field.multiply(h, GF256.addOrSubtract(1, this.field.multiply(b[i], g))));
            e[f] = this.field.multiply(a.evaluateAt(g), this.field.inverse(h)), c && (e[f] = this.field.multiply(e[f], g))
        }
        return e
    }
}
function GF256Poly(a, b) {
    if (null == b || 0 == b.length)throw"System.ArgumentException";
    this.field = a;
    var c = b.length;
    if (c > 1 && 0 == b[0]) {
        for (var d = 1; c > d && 0 == b[d];)d++;
        if (d == c)this.coefficients = a.Zero.coefficients; else {
            this.coefficients = new Array(c - d);
            for (var e = 0; e < this.coefficients.length; e++)this.coefficients[e] = 0;
            for (var f = 0; f < this.coefficients.length; f++)this.coefficients[f] = b[d + f]
        }
    } else this.coefficients = b;
    this.__defineGetter__("Zero", function () {
        return 0 == this.coefficients[0]
    }), this.__defineGetter__("Degree", function () {
        return this.coefficients.length - 1
    }), this.__defineGetter__("Coefficients", function () {
        return this.coefficients
    }), this.getCoefficient = function (a) {
        return this.coefficients[this.coefficients.length - 1 - a]
    }, this.evaluateAt = function (a) {
        if (0 == a)return this.getCoefficient(0);
        var b = this.coefficients.length;
        if (1 == a) {
            for (var c = 0, d = 0; b > d; d++)c = GF256.addOrSubtract(c, this.coefficients[d]);
            return c
        }
        for (var e = this.coefficients[0], d = 1; b > d; d++)e = GF256.addOrSubtract(this.field.multiply(a, e), this.coefficients[d]);
        return e
    }, this.addOrSubtract = function (b) {
        if (this.field != b.field)throw"GF256Polys do not have same GF256 field";
        if (this.Zero)return b;
        if (b.Zero)return this;
        var c = this.coefficients, d = b.coefficients;
        if (c.length > d.length) {
            var e = c;
            c = d, d = e
        }
        for (var f = new Array(d.length), g = d.length - c.length, h = 0; g > h; h++)f[h] = d[h];
        for (var i = g; i < d.length; i++)f[i] = GF256.addOrSubtract(c[i - g], d[i]);
        return new GF256Poly(a, f)
    }, this.multiply1 = function (a) {
        if (this.field != a.field)throw"GF256Polys do not have same GF256 field";
        if (this.Zero || a.Zero)return this.field.Zero;
        for (var b = this.coefficients, c = b.length, d = a.coefficients, e = d.length, f = new Array(c + e - 1), g = 0; c > g; g++)for (var h = b[g], i = 0; e > i; i++)f[g + i] = GF256.addOrSubtract(f[g + i], this.field.multiply(h, d[i]));
        return new GF256Poly(this.field, f)
    }, this.multiply2 = function (a) {
        if (0 == a)return this.field.Zero;
        if (1 == a)return this;
        for (var b = this.coefficients.length, c = new Array(b), d = 0; b > d; d++)c[d] = this.field.multiply(this.coefficients[d], a);
        return new GF256Poly(this.field, c)
    }, this.multiplyByMonomial = function (a, b) {
        if (0 > a)throw"System.ArgumentException";
        if (0 == b)return this.field.Zero;
        for (var c = this.coefficients.length, d = new Array(c + a), e = 0; e < d.length; e++)d[e] = 0;
        for (var e = 0; c > e; e++)d[e] = this.field.multiply(this.coefficients[e], b);
        return new GF256Poly(this.field, d)
    }, this.divide = function (a) {
        if (this.field != a.field)throw"GF256Polys do not have same GF256 field";
        if (a.Zero)throw"Divide by 0";
        for (var b = this.field.Zero, c = this, d = a.getCoefficient(a.Degree), e = this.field.inverse(d); c.Degree >= a.Degree && !c.Zero;) {
            var f = c.Degree - a.Degree, g = this.field.multiply(c.getCoefficient(c.Degree), e), h = a.multiplyByMonomial(f, g), i = this.field.buildMonomial(f, g);
            b = b.addOrSubtract(i), c = c.addOrSubtract(h)
        }
        return new Array(b, c)
    }
}
function GF256(a) {
    this.expTable = new Array(256), this.logTable = new Array(256);
    for (var b = 1, c = 0; 256 > c; c++)this.expTable[c] = b, b <<= 1, b >= 256 && (b ^= a);
    for (var c = 0; 255 > c; c++)this.logTable[this.expTable[c]] = c;
    var d = new Array(1);
    d[0] = 0, this.zero = new GF256Poly(this, new Array(d));
    var e = new Array(1);
    e[0] = 1, this.one = new GF256Poly(this, new Array(e)), this.__defineGetter__("Zero", function () {
        return this.zero
    }), this.__defineGetter__("One", function () {
        return this.one
    }), this.buildMonomial = function (a, b) {
        if (0 > a)throw"System.ArgumentException";
        if (0 == b)return zero;
        for (var c = new Array(a + 1), d = 0; d < c.length; d++)c[d] = 0;
        return c[0] = b, new GF256Poly(this, c)
    }, this.exp = function (a) {
        return this.expTable[a]
    }, this.log = function (a) {
        if (0 == a)throw"System.ArgumentException";
        return this.logTable[a]
    }, this.inverse = function (a) {
        if (0 == a)throw"System.ArithmeticException";
        return this.expTable[255 - this.logTable[a]]
    }, this.multiply = function (a, b) {
        return 0 == a || 0 == b ? 0 : 1 == a ? b : 1 == b ? a : this.expTable[(this.logTable[a] + this.logTable[b]) % 255]
    }
}
function URShift(a, b) {
    return a >= 0 ? a >> b : (a >> b) + (2 << ~b)
}
function FinderPattern(a, b, c) {
    this.x = a, this.y = b, this.count = 1, this.estimatedModuleSize = c, this.__defineGetter__("EstimatedModuleSize", function () {
        return this.estimatedModuleSize
    }), this.__defineGetter__("Count", function () {
        return this.count
    }), this.__defineGetter__("X", function () {
        return this.x
    }), this.__defineGetter__("Y", function () {
        return this.y
    }), this.incrementCount = function () {
        this.count++
    }, this.aboutEquals = function (a, b, c) {
        if (Math.abs(b - this.y) <= a && Math.abs(c - this.x) <= a) {
            var d = Math.abs(a - this.estimatedModuleSize);
            return 1 >= d || d / this.estimatedModuleSize <= 1
        }
        return!1
    }
}
function FinderPatternInfo(a) {
    this.bottomLeft = a[0], this.topLeft = a[1], this.topRight = a[2], this.__defineGetter__("BottomLeft", function () {
        return this.bottomLeft
    }), this.__defineGetter__("TopLeft", function () {
        return this.topLeft
    }), this.__defineGetter__("TopRight", function () {
        return this.topRight
    })
}
function FinderPatternFinder() {
    this.image = null, this.possibleCenters = [], this.hasSkipped = !1, this.crossCheckStateCount = new Array(0, 0, 0, 0, 0), this.resultPointCallback = null, this.__defineGetter__("CrossCheckStateCount", function () {
        return this.crossCheckStateCount[0] = 0, this.crossCheckStateCount[1] = 0, this.crossCheckStateCount[2] = 0, this.crossCheckStateCount[3] = 0, this.crossCheckStateCount[4] = 0, this.crossCheckStateCount
    }), this.foundPatternCross = function (a) {
        for (var b = 0, c = 0; 5 > c; c++) {
            var d = a[c];
            if (0 == d)return!1;
            b += d
        }
        if (7 > b)return!1;
        var e = Math.floor((b << INTEGER_MATH_SHIFT) / 7), f = Math.floor(e / 2);
        return Math.abs(e - (a[0] << INTEGER_MATH_SHIFT)) < f && Math.abs(e - (a[1] << INTEGER_MATH_SHIFT)) < f && Math.abs(3 * e - (a[2] << INTEGER_MATH_SHIFT)) < 3 * f && Math.abs(e - (a[3] << INTEGER_MATH_SHIFT)) < f && Math.abs(e - (a[4] << INTEGER_MATH_SHIFT)) < f
    }, this.centerFromEnd = function (a, b) {
        return b - a[4] - a[3] - a[2] / 2
    }, this.crossCheckVertical = function (a, b, c, d) {
        for (var e = this.image, f = qrcode.height, g = this.CrossCheckStateCount, h = a; h >= 0 && e[b + h * qrcode.width];)g[2]++, h--;
        if (0 > h)return 0 / 0;
        for (; h >= 0 && !e[b + h * qrcode.width] && g[1] <= c;)g[1]++, h--;
        if (0 > h || g[1] > c)return 0 / 0;
        for (; h >= 0 && e[b + h * qrcode.width] && g[0] <= c;)g[0]++, h--;
        if (g[0] > c)return 0 / 0;
        for (h = a + 1; f > h && e[b + h * qrcode.width];)g[2]++, h++;
        if (h == f)return 0 / 0;
        for (; f > h && !e[b + h * qrcode.width] && g[3] < c;)g[3]++, h++;
        if (h == f || g[3] >= c)return 0 / 0;
        for (; f > h && e[b + h * qrcode.width] && g[4] < c;)g[4]++, h++;
        if (g[4] >= c)return 0 / 0;
        var i = g[0] + g[1] + g[2] + g[3] + g[4];
        return 5 * Math.abs(i - d) >= 2 * d ? 0 / 0 : this.foundPatternCross(g) ? this.centerFromEnd(g, h) : 0 / 0
    }, this.crossCheckHorizontal = function (a, b, c, d) {
        for (var e = this.image, f = qrcode.width, g = this.CrossCheckStateCount, h = a; h >= 0 && e[h + b * qrcode.width];)g[2]++, h--;
        if (0 > h)return 0 / 0;
        for (; h >= 0 && !e[h + b * qrcode.width] && g[1] <= c;)g[1]++, h--;
        if (0 > h || g[1] > c)return 0 / 0;
        for (; h >= 0 && e[h + b * qrcode.width] && g[0] <= c;)g[0]++, h--;
        if (g[0] > c)return 0 / 0;
        for (h = a + 1; f > h && e[h + b * qrcode.width];)g[2]++, h++;
        if (h == f)return 0 / 0;
        for (; f > h && !e[h + b * qrcode.width] && g[3] < c;)g[3]++, h++;
        if (h == f || g[3] >= c)return 0 / 0;
        for (; f > h && e[h + b * qrcode.width] && g[4] < c;)g[4]++, h++;
        if (g[4] >= c)return 0 / 0;
        var i = g[0] + g[1] + g[2] + g[3] + g[4];
        return 5 * Math.abs(i - d) >= d ? 0 / 0 : this.foundPatternCross(g) ? this.centerFromEnd(g, h) : 0 / 0
    }, this.handlePossibleCenter = function (a, b, c) {
        var d = a[0] + a[1] + a[2] + a[3] + a[4], e = this.centerFromEnd(a, c), f = this.crossCheckVertical(b, Math.floor(e), a[2], d);
        if (!isNaN(f) && (e = this.crossCheckHorizontal(Math.floor(e), Math.floor(f), a[2], d), !isNaN(e))) {
            for (var g = d / 7, h = !1, i = this.possibleCenters.length, j = 0; i > j; j++) {
                var k = this.possibleCenters[j];
                if (k.aboutEquals(g, f, e)) {
                    k.incrementCount(), h = !0;
                    break
                }
            }
            if (!h) {
                var l = new FinderPattern(e, f, g);
                this.possibleCenters.push(l), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(l)
            }
            return!0
        }
        return!1
    }, this.selectBestPatterns = function () {
        var a = this.possibleCenters.length;
        if (3 > a)throw"Couldn't find enough finder patterns";
        if (a > 3) {
            for (var b = 0, c = 0, d = 0; a > d; d++) {
                var e = this.possibleCenters[d].EstimatedModuleSize;
                b += e, c += e * e
            }
            var f = b / a;
            this.possibleCenters.sort(function (a, b) {
                var c = Math.abs(b.EstimatedModuleSize - f), d = Math.abs(a.EstimatedModuleSize - f);
                return d > c ? -1 : c == d ? 0 : 1
            });
            for (var g = Math.sqrt(c / a - f * f), h = Math.max(.2 * f, g), d = 0; d < this.possibleCenters.length && this.possibleCenters.length > 3; d++) {
                var i = this.possibleCenters[d];
                Math.abs(i.EstimatedModuleSize - f) > h && (this.possibleCenters.remove(d), d--)
            }
        }
        return this.possibleCenters.length > 3 && this.possibleCenters.sort(function (a, b) {
            return a.count > b.count ? -1 : a.count < b.count ? 1 : 0
        }), new Array(this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2])
    }, this.findRowSkip = function () {
        var a = this.possibleCenters.length;
        if (1 >= a)return 0;
        for (var b = null, c = 0; a > c; c++) {
            var d = this.possibleCenters[c];
            if (d.Count >= CENTER_QUORUM) {
                if (null != b)return this.hasSkipped = !0, Math.floor((Math.abs(b.X - d.X) - Math.abs(b.Y - d.Y)) / 2);
                b = d
            }
        }
        return 0
    }, this.haveMultiplyConfirmedCenters = function () {
        for (var a = 0, b = 0, c = this.possibleCenters.length, d = 0; c > d; d++) {
            var e = this.possibleCenters[d];
            e.Count >= CENTER_QUORUM && (a++, b += e.EstimatedModuleSize)
        }
        if (3 > a)return!1;
        for (var f = b / c, g = 0, d = 0; c > d; d++)e = this.possibleCenters[d], g += Math.abs(e.EstimatedModuleSize - f);
        return.05 * b >= g
    }, this.findFinderPattern = function (a) {
        var b = !1;
        this.image = a;
        var c = qrcode.height, d = qrcode.width, e = Math.floor(3 * c / (4 * MAX_MODULES));
        (MIN_SKIP > e || b) && (e = MIN_SKIP);
        for (var f = !1, g = new Array(5), h = e - 1; c > h && !f; h += e) {
            g[0] = 0, g[1] = 0, g[2] = 0, g[3] = 0, g[4] = 0;
            for (var i = 0, j = 0; d > j; j++)if (a[j + h * qrcode.width])1 == (1 & i) && i++, g[i]++; else if (0 == (1 & i))if (4 == i)if (this.foundPatternCross(g)) {
                var k = this.handlePossibleCenter(g, h, j);
                if (k)if (e = 2, this.hasSkipped)f = this.haveMultiplyConfirmedCenters(); else {
                    var l = this.findRowSkip();
                    l > g[2] && (h += l - g[2] - e, j = d - 1)
                } else {
                    do j++; while (d > j && !a[j + h * qrcode.width]);
                    j--
                }
                i = 0, g[0] = 0, g[1] = 0, g[2] = 0, g[3] = 0, g[4] = 0
            } else g[0] = g[2], g[1] = g[3], g[2] = g[4], g[3] = 1, g[4] = 0, i = 3; else g[++i]++; else g[i]++;
            if (this.foundPatternCross(g)) {
                var k = this.handlePossibleCenter(g, h, d);
                k && (e = g[0], this.hasSkipped && (f = haveMultiplyConfirmedCenters()))
            }
        }
        var m = this.selectBestPatterns();
        return qrcode.orderBestPatterns(m), new FinderPatternInfo(m)
    }
}
function AlignmentPattern(a, b, c) {
    this.x = a, this.y = b, this.count = 1, this.estimatedModuleSize = c, this.__defineGetter__("EstimatedModuleSize", function () {
        return this.estimatedModuleSize
    }), this.__defineGetter__("Count", function () {
        return this.count
    }), this.__defineGetter__("X", function () {
        return Math.floor(this.x)
    }), this.__defineGetter__("Y", function () {
        return Math.floor(this.y)
    }), this.incrementCount = function () {
        this.count++
    }, this.aboutEquals = function (a, b, c) {
        if (Math.abs(b - this.y) <= a && Math.abs(c - this.x) <= a) {
            var d = Math.abs(a - this.estimatedModuleSize);
            return 1 >= d || d / this.estimatedModuleSize <= 1
        }
        return!1
    }
}
function AlignmentPatternFinder(a, b, c, d, e, f, g) {
    this.image = a, this.possibleCenters = new Array, this.startX = b, this.startY = c, this.width = d, this.height = e, this.moduleSize = f, this.crossCheckStateCount = new Array(0, 0, 0), this.resultPointCallback = g, this.centerFromEnd = function (a, b) {
        return b - a[2] - a[1] / 2
    }, this.foundPatternCross = function (a) {
        for (var b = this.moduleSize, c = b / 2, d = 0; 3 > d; d++)if (Math.abs(b - a[d]) >= c)return!1;
        return!0
    }, this.crossCheckVertical = function (a, b, c, d) {
        var e = this.image, f = qrcode.height, g = this.crossCheckStateCount;
        g[0] = 0, g[1] = 0, g[2] = 0;
        for (var h = a; h >= 0 && e[b + h * qrcode.width] && g[1] <= c;)g[1]++, h--;
        if (0 > h || g[1] > c)return 0 / 0;
        for (; h >= 0 && !e[b + h * qrcode.width] && g[0] <= c;)g[0]++, h--;
        if (g[0] > c)return 0 / 0;
        for (h = a + 1; f > h && e[b + h * qrcode.width] && g[1] <= c;)g[1]++, h++;
        if (h == f || g[1] > c)return 0 / 0;
        for (; f > h && !e[b + h * qrcode.width] && g[2] <= c;)g[2]++, h++;
        if (g[2] > c)return 0 / 0;
        var i = g[0] + g[1] + g[2];
        return 5 * Math.abs(i - d) >= 2 * d ? 0 / 0 : this.foundPatternCross(g) ? this.centerFromEnd(g, h) : 0 / 0
    }, this.handlePossibleCenter = function (a, b, c) {
        var d = a[0] + a[1] + a[2], e = this.centerFromEnd(a, c), f = this.crossCheckVertical(b, Math.floor(e), 2 * a[1], d);
        if (!isNaN(f)) {
            for (var g = (a[0] + a[1] + a[2]) / 3, h = this.possibleCenters.length, i = 0; h > i; i++) {
                var j = this.possibleCenters[i];
                if (j.aboutEquals(g, f, e))return new AlignmentPattern(e, f, g)
            }
            var k = new AlignmentPattern(e, f, g);
            this.possibleCenters.push(k), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(k)
        }
        return null
    }, this.find = function () {
        for (var b = this.startX, e = this.height, f = b + d, g = c + (e >> 1), h = new Array(0, 0, 0), i = 0; e > i; i++) {
            var j = g + (0 == (1 & i) ? i + 1 >> 1 : -(i + 1 >> 1));
            h[0] = 0, h[1] = 0, h[2] = 0;
            for (var k = b; f > k && !a[k + qrcode.width * j];)k++;
            for (var l = 0; f > k;) {
                if (a[k + j * qrcode.width])if (1 == l)h[l]++; else if (2 == l) {
                    if (this.foundPatternCross(h)) {
                        var m = this.handlePossibleCenter(h, j, k);
                        if (null != m)return m
                    }
                    h[0] = h[2], h[1] = 1, h[2] = 0, l = 1
                } else h[++l]++; else 1 == l && l++, h[l]++;
                k++
            }
            if (this.foundPatternCross(h)) {
                var m = this.handlePossibleCenter(h, j, f);
                if (null != m)return m
            }
        }
        if (0 != this.possibleCenters.length)return this.possibleCenters[0];
        throw"Couldn't find enough alignment patterns"
    }
}
function QRCodeDataBlockReader(a, b, c) {
    this.blockPointer = 0, this.bitPointer = 7, this.dataLength = 0, this.blocks = a, this.numErrorCorrectionCode = c, 9 >= b ? this.dataLengthMode = 0 : b >= 10 && 26 >= b ? this.dataLengthMode = 1 : b >= 27 && 40 >= b && (this.dataLengthMode = 2), this.getNextBits = function (a) {
        var b = 0;
        if (a < this.bitPointer + 1) {
            for (var c = 0, d = 0; a > d; d++)c += 1 << d;
            return c <<= this.bitPointer - a + 1, b = (this.blocks[this.blockPointer] & c) >> this.bitPointer - a + 1, this.bitPointer -= a, b
        }
        if (a < this.bitPointer + 1 + 8) {
            for (var e = 0, d = 0; d < this.bitPointer + 1; d++)e += 1 << d;
            return b = (this.blocks[this.blockPointer] & e) << a - (this.bitPointer + 1), this.blockPointer++, b += this.blocks[this.blockPointer] >> 8 - (a - (this.bitPointer + 1)), this.bitPointer = this.bitPointer - a % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), b
        }
        if (a < this.bitPointer + 1 + 16) {
            for (var e = 0, f = 0, d = 0; d < this.bitPointer + 1; d++)e += 1 << d;
            var g = (this.blocks[this.blockPointer] & e) << a - (this.bitPointer + 1);
            this.blockPointer++;
            var h = this.blocks[this.blockPointer] << a - (this.bitPointer + 1 + 8);
            this.blockPointer++;
            for (var d = 0; d < a - (this.bitPointer + 1 + 8); d++)f += 1 << d;
            f <<= 8 - (a - (this.bitPointer + 1 + 8));
            var i = (this.blocks[this.blockPointer] & f) >> 8 - (a - (this.bitPointer + 1 + 8));
            return b = g + h + i, this.bitPointer = this.bitPointer - (a - 8) % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), b
        }
        return 0
    }, this.NextMode = function () {
        return this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2 ? 0 : this.getNextBits(4)
    }, this.getDataLength = function (a) {
        for (var b = 0; ;) {
            if (a >> b == 1)break;
            b++
        }
        return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][b])
    }, this.getRomanAndFigureString = function (a) {
        var b = a, c = 0, d = "", e = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
        do if (b > 1) {
            c = this.getNextBits(11);
            var f = Math.floor(c / 45), g = c % 45;
            d += e[f], d += e[g], b -= 2
        } else 1 == b && (c = this.getNextBits(6), d += e[c], b -= 1); while (b > 0);
        return d
    }, this.getFigureString = function (a) {
        var b = a, c = 0, d = "";
        do b >= 3 ? (c = this.getNextBits(10), 100 > c && (d += "0"), 10 > c && (d += "0"), b -= 3) : 2 == b ? (c = this.getNextBits(7), 10 > c && (d += "0"), b -= 2) : 1 == b && (c = this.getNextBits(4), b -= 1), d += c; while (b > 0);
        return d
    }, this.get8bitByteArray = function (a) {
        var b = a, c = 0, d = new Array;
        do c = this.getNextBits(8), d.push(c), b--; while (b > 0);
        return d
    }, this.getKanjiString = function (a) {
        var b = a, c = 0, d = "";
        do {
            c = getNextBits(13);
            var e = c % 192, f = c / 192, g = (f << 8) + e, h = 0;
            h = 40956 >= g + 33088 ? g + 33088 : g + 49472, d += String.fromCharCode(h), b--
        } while (b > 0);
        return d
    }, this.__defineGetter__("DataByte", function () {
        for (var a = new Array, b = 1, c = 2, d = 4, e = 8; ;) {
            var f = this.NextMode();
            if (0 == f) {
                if (a.length > 0)break;
                throw"Empty data block"
            }
            if (f != b && f != c && f != d && f != e)throw"Invalid mode: " + f + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
            var g = this.getDataLength(f);
            if (1 > g)throw"Invalid data length: " + g;
            switch (f) {
                case b:
                    for (var h = this.getFigureString(g), i = new Array(h.length), j = 0; j < h.length; j++)i[j] = h.charCodeAt(j);
                    a.push(i);
                    break;
                case c:
                    for (var h = this.getRomanAndFigureString(g), i = new Array(h.length), j = 0; j < h.length; j++)i[j] = h.charCodeAt(j);
                    a.push(i);
                    break;
                case d:
                    var k = this.get8bitByteArray(g);
                    a.push(k);
                    break;
                case e:
                    var h = this.getKanjiString(g);
                    a.push(h)
            }
        }
        return a
    })
}
if (function (a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        Object.defineProperty(this.cache = {}, 0, {get: function () {
            return{}
        }}), this.expando = fb.expando + Math.random()
    }

    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d
            } catch (f) {
            }
            pb.set(a, c, d)
        } else d = b;
        return d
    }

    function g() {
        return!0
    }

    function h() {
        return!1
    }

    function i() {
        try {
            return T.activeElement
        } catch (a) {
        }
    }

    function j(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function k(a, b, c) {
        if (fb.isFunction(b))return fb.grep(a, function (a, d) {
            return!!b.call(a, d, a) !== c
        });
        if (b.nodeType)return fb.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Cb.test(b))return fb.filter(b, a, c);
            b = fb.filter(b, a)
        }
        return fb.grep(a, function (a) {
            return bb.call(b, a) >= 0 !== c
        })
    }

    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++)qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"))
    }

    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)fb.event.add(b, e, j[e][c])
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i))
        }
    }

    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([a], d) : d
    }

    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function s(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--;)if (b = _b[e] + c, b in a)return b;
        return d
    }

    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
    }

    function u(b) {
        return a.getComputedStyle(b, null)
    }

    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g
    }

    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e))return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c
    }

    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d
    }

    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b))fb.each(b, function (b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== fb.type(b))d(a, b); else for (e in b)B(a + "[" + e + "]", b[e], c, d)
    }

    function C(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a
    }

    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)for (f in i)if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0]in d)g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return{state: "success", data: b}
    }

    function H() {
        return setTimeout(function () {
            Bc = b
        }), Bc = fb.now()
    }

    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return!1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: fb.extend({}, b), opts: fb.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: Bc || H(), duration: c.duration, tweens: [], createTween: function (b, c) {
            var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
        }, stop: function (b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e)return this;
            for (e = !0; d > c; c++)j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)if (d = Gc[f].call(j, a, k, j.opts))return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function K(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function () {
            i.unqueued || j()
        }), i.unqueued++, k.always(function () {
            k.always(function () {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in c || "width"in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function () {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                if ("show" !== f || !o || o[e] === b)continue;
                n = !0
            }
            l[e] = o && o[e] || fb.style(a, e)
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden"in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fb(a).show() : k.done(function () {
                fb(a).hide()
            }), k.done(function () {
                var b;
                qb.remove(a, "fxshow");
                for (b in l)fb.style(a, b, l[b])
            });
            for (e in l)h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }

    function N(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.3", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function (a, b) {
        return new fb.fn.init(a, b, P)
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function (a, b) {
        return b.toUpperCase()
    }, nb = function () {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), fb.ready()
    };
    fb.fn = fb.prototype = {jquery: Z, constructor: fb, init: function (a, c, d) {
        var e, f;
        if (!a)return this;
        if ("string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ib.exec(a), !e || !e[1] && c)return!c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
            if (e[1]) {
                if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), jb.test(e[1]) && fb.isPlainObject(c))for (e in c)fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                return this
            }
            return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
    }, selector: "", length: 0, toArray: function () {
        return ab.call(this)
    }, get: function (a) {
        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
    }, pushStack: function (a) {
        var b = fb.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
    }, each: function (a, b) {
        return fb.each(this, a, b)
    }, ready: function (a) {
        return fb.ready.promise().done(a), this
    }, slice: function () {
        return this.pushStack(ab.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, map: function (a) {
        return this.pushStack(fb.map(this, function (b, c) {
            return a.call(b, c, b)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: _, sort: [].sort, splice: [].splice}, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)if (null != (a = arguments[i]))for (c in a)d = h[c], e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, fb.extend({expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), noConflict: function (b) {
        return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb
    }, isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? fb.readyWait++ : fb.ready(!0)
    }, ready: function (a) {
        (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [fb]), fb.fn.trigger && fb(T).trigger("ready").off("ready")))
    }, isFunction: function (a) {
        return"function" === fb.type(a)
    }, isArray: Array.isArray, isWindow: function (a) {
        return null != a && a === a.window
    }, isNumeric: function (a) {
        return!isNaN(parseFloat(a)) && isFinite(a)
    }, type: function (a) {
        return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a
    }, isPlainObject: function (a) {
        if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a))return!1;
        try {
            if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf"))return!1
        } catch (b) {
            return!1
        }
        return!0
    }, isEmptyObject: function (a) {
        var b;
        for (b in a)return!1;
        return!0
    }, error: function (a) {
        throw new Error(a)
    }, parseHTML: function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || T;
        var d = jb.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && fb(e).remove(), fb.merge([], d.childNodes))
    }, parseJSON: JSON.parse, parseXML: function (a) {
        var c, d;
        if (!a || "string" != typeof a)return null;
        try {
            d = new DOMParser, c = d.parseFromString(a, "text/xml")
        } catch (e) {
            c = b
        }
        return(!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), c
    }, noop: function () {
    }, globalEval: function (a) {
        var b, c = eval;
        a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase: function (a) {
        return a.replace(kb, "ms-").replace(lb, mb)
    }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, d) {
        var e, f = 0, g = a.length, h = c(a);
        if (d) {
            if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
        } else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
        return a
    }, trim: function (a) {
        return null == a ? "" : eb.call(a)
    }, makeArray: function (a, b) {
        var d = b || [];
        return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
    }, inArray: function (a, b, c) {
        return null == b ? -1 : bb.call(b, a, c)
    }, merge: function (a, c) {
        var d = c.length, e = a.length, f = 0;
        if ("number" == typeof d)for (; d > f; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
        return a.length = e, a
    }, grep: function (a, b, c) {
        var d, e = [], f = 0, g = a.length;
        for (c = !!c; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
        return e
    }, map: function (a, b, d) {
        var e, f = 0, g = a.length, h = c(a), i = [];
        if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a)e = b(a[f], f, d), null != e && (i[i.length] = e);
        return $.apply([], i)
    }, guid: 1, proxy: function (a, c) {
        var d, e, f;
        return"string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), f = function () {
            return a.apply(c || this, e.concat(ab.call(arguments)))
        }, f.guid = a.guid = a.guid || fb.guid++, f) : b
    }, access: function (a, c, d, e, f, g, h) {
        var i = 0, j = a.length, k = null == d;
        if ("object" === fb.type(d)) {
            f = !0;
            for (i in d)fb.access(a, c, i, d[i], !0, g, h)
        } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
            return k.call(fb(a), c)
        })), c))for (; j > i; i++)c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
        return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
    }, now: Date.now, swap: function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    }}), fb.ready.promise = function (b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), a.addEventListener("load", nb, !1))), Q.promise(b)
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        X["[object " + b + "]"] = b.toLowerCase()
    }), P = fb(T), function (a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)return c;
            if (1 !== (h = b.nodeType) && 9 !== h)return[];
            if (I && !d) {
                if (e = tb.exec(a))if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode)return c;
                        if (f.id === g)return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                } else {
                    if (e[2])return ab.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)return ab.apply(c, b.getElementsByClassName(g)), c
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;)j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",")
                    }
                    if (p)try {
                        return ab.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {
                    } finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(kb, "$1"), b, c, d)
        }

        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
            }

            var b = [];
            return a
        }

        function e(a) {
            return a[N] = !0, a
        }

        function f(a) {
            var b = G.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)z.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d)return d;
            if (c)for (; c = c.nextSibling;)if (c === b)return-1;
            return a ? 1 : -1
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return"input" === c && b.type === a
            }
        }

        function j(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return e(function (b) {
                return b = +b, e(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l() {
        }

        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h;) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({value: d, type: e[0].replace(kb, " ")}), h = h.slice(d.length));
                for (g in z.filter)!(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d, type: g, matches: e}), h = h.slice(d.length));
                if (!d)break
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return!0
                } else for (; b = b[d];)if (1 === b.nodeType || e)if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y)return h === !0
                } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0)return!0
            }
        }

        function p(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return!1;
                return!0
            } : a[0]
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function (e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d)for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                return a === b
            }, g, !0), j = o(function (a) {
                return cb.call(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                return!f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }]; e > h; h++)if (c = z.relative[a[h].type])k = [o(p(k), c)]; else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                }
                k.push(c)
            }
            return p(k)
        }

        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function (e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++];)if (n(l, h, i)) {
                            j.push(l);
                            break
                        }
                        t && (P = w, y = ++d)
                    }
                    f && ((l = !n && l) && p--, e && s.push(l))
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++];)n(s, o, h, i);
                    if (e) {
                        if (p > 0)for (; r--;)s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o)
                    }
                    ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                }
                return t && (P = w, D = u), s
            };
            return f ? e(h) : h
        }

        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)c(a, b[e], d);
            return d
        }

        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b)return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a)return ab.apply(c, d), c;
                    break
                }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c
        }

        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function (a, b) {
            return a === b ? (U = !0, 0) : 0
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
            return-1
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hb = gb.replace("w", "w#"), ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {ID: new RegExp("^#(" + gb + ")"), CLASS: new RegExp("^\\.(" + gb + ")"), TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ib), PSEUDO: new RegExp("^" + jb), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"), bool: new RegExp("^(?:" + db + ")$", "i"), needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")}, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
        } catch (zb) {
            ab = {apply: Z.length ? function (a, b) {
                _.apply(a, bb.call(b))
            } : function (a, b) {
                for (var c = a.length, d = 0; a[c++] = b[d++];);
                a.length = c - 1
            }}
        }
        B = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, x = c.support = {}, F = c.setDocument = function (a) {
            var b = a ? a.ownerDocument || a : O, c = b.defaultView;
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function () {
                F()
            }), x.attributes = f(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = f(function (a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = f(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = f(function (a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
            }), x.getById ? (z.find.ID = function (a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, z.filter.ID = function (a) {
                var b = a.replace(xb, yb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete z.find.ID, z.filter.ID = function (a) {
                var b = a.replace(xb, yb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), z.find.TAG = x.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];)1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, z.find.CLASS = x.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), f(function (a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function (a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return!0;
                return!1
            }, V = H.compareDocumentPosition ? function (a, c) {
                if (a === c)return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function (a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, i = [a], j = [c];
                if (a === c)return U = !0, 0;
                if (!f || !g)return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g)return h(a, c);
                for (d = a; d = d.parentNode;)i.unshift(d);
                for (d = c; d = d.parentNode;)j.unshift(d);
                for (; i[e] === j[e];)e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, b) : G
        }, c.matches = function (a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b)))try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return c(b, G, null, [a]).length > 0
        }, c.contains = function (a, b) {
            return(a.ownerDocument || a) !== G && F(a), M(a, b)
        }, c.attr = function (a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        }, c.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, c.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (; b = a[e++];)b === a[e] && (d = c.push(e));
                for (; d--;)a.splice(c[d], 1)
            }
            return a
        }, A = c.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += A(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d]; d++)c += A(b);
            return c
        }, z = c.selectors = {cacheLength: 50, createPseudo: e, match: rb, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
            return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
        }, PSEUDO: function (a) {
            var c, d = !a[5] && a[2];
            return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
        }}, filter: {TAG: function (a) {
            var b = a.replace(xb, yb).toLowerCase();
            return"*" === a ? function () {
                return!0
            } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b
            }
        }, CLASS: function (a) {
            var b = R[a + " "];
            return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function (a) {
                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
            })
        }, ATTR: function (a, b, d) {
            return function (e) {
                var f = c.attr(e, a);
                return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
            }
        }, CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
            return 1 === d && 0 === e ? function (a) {
                return!!a.parentNode
            } : function (b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                if (q) {
                    if (f) {
                        for (; p;) {
                            for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return!1;
                            o = p = "only" === a && !o && "nextSibling"
                        }
                        return!0
                    }
                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                        for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [P, n, m];
                            break
                        }
                    } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                    return m -= e, m === d || m % d === 0 && m / d >= 0
                }
            }
        }, PSEUDO: function (a, b) {
            var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
            return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                for (var d, e = f(a, b), g = e.length; g--;)d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
            }) : function (a) {
                return f(a, 0, d)
            }) : f
        }}, pseudos: {not: e(function (a) {
            var b = [], c = [], d = C(a.replace(kb, "$1"));
            return d[N] ? e(function (a, b, c, e) {
                for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function (a, e, f) {
                return b[0] = a, d(b, null, f, c), !c.pop()
            }
        }), has: e(function (a) {
            return function (b) {
                return c(a, b).length > 0
            }
        }), contains: e(function (a) {
            return function (b) {
                return(b.textContent || b.innerText || A(b)).indexOf(a) > -1
            }
        }), lang: e(function (a) {
            return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), function (b) {
                var c;
                do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return!1
            }
        }), target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
        }, root: function (a) {
            return a === H
        }, focus: function (a) {
            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function (a) {
            return a.disabled === !1
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType)return!1;
            return!0
        }, parent: function (a) {
            return!z.pseudos.empty(a)
        }, header: function (a) {
            return vb.test(a.nodeName)
        }, input: function (a) {
            return ub.test(a.nodeName)
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
            var b;
            return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
        }, first: k(function () {
            return[0]
        }), last: k(function (a, b) {
            return[b - 1]
        }), eq: k(function (a, b, c) {
            return[0 > c ? c + b : c]
        }), even: k(function (a, b) {
            for (var c = 0; b > c; c += 2)a.push(c);
            return a
        }), odd: k(function (a, b) {
            for (var c = 1; b > c; c += 2)a.push(c);
            return a
        }), lt: k(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
            return a
        }), gt: k(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
            return a
        })}}, z.pseudos.nth = z.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})z.pseudos[w] = i(w);
        for (w in{submit: !0, reset: !0})z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function (a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), f(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), x.attributes && f(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || g("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), f(function (a) {
            return null == a.getAttribute("disabled")
        }) || g(db, function (a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
        }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains
    }(a);
    var ob = {};
    fb.Callbacks = function (a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
        }, m = {add: function () {
            if (j) {
                var b = j.length;
                !function d(b) {
                    fb.each(b, function (b, c) {
                        var e = fb.type(c);
                        "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                    })
                }(arguments), f ? h = j.length : c && (g = b, l(c))
            }
            return this
        }, remove: function () {
            return j && fb.each(arguments, function (a, b) {
                for (var c; (c = fb.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
            }), this
        }, has: function (a) {
            return a ? fb.inArray(a, j) > -1 : !(!j || !j.length)
        }, empty: function () {
            return j = [], h = 0, this
        }, disable: function () {
            return j = k = c = b, this
        }, disabled: function () {
            return!j
        }, lock: function () {
            return k = b, c || m.disable(), this
        }, locked: function () {
            return!k
        }, fireWith: function (a, b) {
            return!j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
        }, fire: function () {
            return m.fireWith(this, arguments), this
        }, fired: function () {
            return!!e
        }};
        return m
    }, fb.extend({Deferred: function (a) {
        var b = [
            ["resolve", "done", fb.Callbacks("once memory"), "resolved"],
            ["reject", "fail", fb.Callbacks("once memory"), "rejected"],
            ["notify", "progress", fb.Callbacks("memory")]
        ], c = "pending", d = {state: function () {
            return c
        }, always: function () {
            return e.done(arguments).fail(arguments), this
        }, then: function () {
            var a = arguments;
            return fb.Deferred(function (c) {
                fb.each(b, function (b, f) {
                    var g = f[0], h = fb.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                        var a = h && h.apply(this, arguments);
                        a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                    })
                }), a = null
            }).promise()
        }, promise: function (a) {
            return null != a ? fb.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, fb.each(b, function (a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function () {
                c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
        var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function (a, c, d) {
            return function (e) {
                c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
        };
        if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
    }}), fb.support = function (b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin"in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function () {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fb.swap(g, null != g.style.zoom ? {zoom: 1} : {}, function () {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {width: "4px"}).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function (a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {key: function (a) {
        if (!e.accepts(a))return 0;
        var b = {}, c = a[this.expando];
        if (!c) {
            c = e.uid++;
            try {
                b[this.expando] = {value: c}, Object.defineProperties(a, b)
            } catch (d) {
                b[this.expando] = c, fb.extend(a, b)
            }
        }
        return this.cache[c] || (this.cache[c] = {}), c
    }, set: function (a, b, c) {
        var d, e = this.key(a), f = this.cache[e];
        if ("string" == typeof b)f[b] = c; else if (fb.isEmptyObject(f))fb.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
        return f
    }, get: function (a, c) {
        var d = this.cache[this.key(a)];
        return c === b ? d : d[c]
    }, access: function (a, c, d) {
        var e;
        return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
    }, remove: function (a, c) {
        var d, e, f, g = this.key(a), h = this.cache[g];
        if (c === b)this.cache[g] = {}; else {
            fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(hb) || [])), d = e.length;
            for (; d--;)delete h[e[d]]
        }
    }, hasData: function (a) {
        return!fb.isEmptyObject(this.cache[a[this.expando]] || {})
    }, discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]]
    }}, pb = new e, qb = new e, fb.extend({acceptData: e.accepts, hasData: function (a) {
        return pb.hasData(a) || qb.hasData(a)
    }, data: function (a, b, c) {
        return pb.access(a, b, c)
    }, removeData: function (a, b) {
        pb.remove(a, b)
    }, _data: function (a, b, c) {
        return qb.access(a, b, c)
    }, _removeData: function (a, b) {
        qb.remove(a, b)
    }}), fb.fn.extend({data: function (a, c) {
        var d, e, g = this[0], h = 0, i = null;
        if (a === b) {
            if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                for (d = g.attributes; h < d.length; h++)e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), f(g, e, i[e]));
                qb.set(g, "hasDataAttrs", !0)
            }
            return i
        }
        return"object" == typeof a ? this.each(function () {
            pb.set(this, a)
        }) : fb.access(this, function (c) {
            var d, e = fb.camelCase(a);
            if (g && c === b) {
                if (d = pb.get(g, a), d !== b)return d;
                if (d = pb.get(g, e), d !== b)return d;
                if (d = f(g, e, b), d !== b)return d
            } else this.each(function () {
                var d = pb.get(this, e);
                pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c)
            })
        }, null, c, arguments.length > 1, null, !0)
    }, removeData: function (a) {
        return this.each(function () {
            pb.remove(this, a)
        })
    }}), fb.extend({queue: function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function () {
            fb.dequeue(a, b)
        };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return qb.get(a, c) || qb.access(a, c, {empty: fb.Callbacks("once memory").add(function () {
            qb.remove(a, [b + "queue", c])
        })})
    }}), fb.fn.extend({queue: function (a, c) {
        var d = 2;
        return"string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function () {
            var b = fb.queue(this, a, c);
            fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            fb.dequeue(this, a)
        })
    }, delay: function (a, b) {
        return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function () {
            --e || f.resolveWith(g, [g])
        };
        for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)d = qb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c)
    }});
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({attr: function (a, b) {
        return fb.access(this, fb.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            fb.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return fb.access(this, fb.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        return this.each(function () {
            delete this[fb.propFix[a] || a]
        })
    }, addClass: function (a) {
        var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
        if (fb.isFunction(a))return this.each(function (b) {
            fb(this).addClass(a.call(this, b, this.className))
        });
        if (i)for (b = (a || "").match(hb) || []; h > g; g++)if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
            for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            c.className = fb.trim(d)
        }
        return this
    }, removeClass: function (a) {
        var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
        if (fb.isFunction(a))return this.each(function (b) {
            fb(this).removeClass(a.call(this, b, this.className))
        });
        if (i)for (b = (a || "").match(hb) || []; h > g; g++)if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
            for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
            c.className = a ? fb.trim(d) : ""
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a;
        return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fb.isFunction(a) ? this.each(function (c) {
            fb(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function () {
            if ("string" === c)for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "")
        })
    }, hasClass: function (a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0)return!0;
        return!1
    }, val: function (a) {
        var c, d, e, f = this[0];
        {
            if (arguments.length)return e = fb.isFunction(a), this.each(function (d) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function (a) {
                    return null == a ? "" : a + ""
                })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set"in c && c.set(this, f, "value") !== b || (this.value = f))
            });
            if (f)return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d)
        }
    }}), fb.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return!b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
            if (b = fb(c).val(), f)return b;
            g.push(b)
        }
        return g
    }, set: function (a, b) {
        for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
        return c || (a.selectedIndex = -1), f
    }}}, attr: function (a, c, d) {
        var e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get"in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set"in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (fb.removeAttr(a, c), void 0))
    }, removeAttr: function (a, b) {
        var c, d, e = 0, f = b && b.match(hb);
        if (f && 1 === a.nodeType)for (; c = f[e++];)d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }, attrHooks: {type: {set: function (a, b) {
        if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, c, d) {
        var e, f, g, h = a.nodeType;
        if (a && 3 !== h && 8 !== h && 2 !== h)return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]
    }, propHooks: {tabIndex: {get: function (a) {
        return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1
    }}}}), ub = {set: function (a, b, c) {
        return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c
    }}, fb.each(fb.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function (a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g
        }
    }), fb.support.optSelected || (fb.propHooks.selected = {get: function (a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
    }}), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fb.propFix[this.toLowerCase()] = this
    }), fb.each(["radio", "checkbox"], function () {
        fb.valHooks[this] = {set: function (a, b) {
            return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
        }}, fb.support.checkOn || (fb.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {global: {}, add: function (a, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
        if (r) {
            for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function (a) {
                return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments)
            }, h.elem = a), c = (c || "").match(hb) || [""], k = c.length; k--;)i = Bb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({type: o, origType: q, data: e, handler: d, guid: d.guid, selector: f, needsContext: f && fb.expr.match.needsContext.test(f), namespace: p.join(".")}, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fb.event.global[o] = !0);
            a = null
        }
    }, remove: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
        if (q && (i = q.events)) {
            for (b = (b || "").match(hb) || [""], j = b.length; j--;)if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete i[n])
            } else for (n in i)fb.event.remove(a, n + b[j], c, d, !0);
            fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"))
        }
    }, trigger: function (c, d, e, f) {
        var g, h, i, j, k, l, m, n = [e || T], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
        if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fb.makeArray(d, [c]), m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
            if (!f && !m.noBubble && !fb.isWindow(e)) {
                for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode)n.push(h), i = h;
                i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
            }
            for (g = 0; (h = n[g++]) && !c.isPropagationStopped();)c.type = g > 1 ? j : m.bindType || o, l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
            return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), c.result
        }
    }, dispatch: function (a) {
        a = fb.event.fix(a);
        var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped();)for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
            return k.postDispatch && k.postDispatch.call(this, a), a.result
        }
    }, handlers: function (a, c) {
        var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
        if (i && j.nodeType && (!a.button || "click" !== a.type))for (; j !== this; j = j.parentNode || this)if (j.disabled !== !0 || "click" !== a.type) {
            for (e = [], d = 0; i > d; d++)g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [j]).length), e[f] && e.push(g);
            e.length && h.push({elem: j, handlers: e})
        }
        return i < c.length && h.push({elem: this, handlers: c.slice(i)}), h
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
    }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, c) {
        var d, e, f, g = c.button;
        return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
    }}, fix: function (a) {
        if (a[fb.expando])return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
        return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    }, special: {load: {noBubble: !0}, focus: {trigger: function () {
        return this !== i() && this.focus ? (this.focus(), !1) : void 0
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === i() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
        return"checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), !1) : void 0
    }, _default: function (a) {
        return fb.nodeName(a.target, "a")
    }}, beforeunload: {postDispatch: function (a) {
        a.result !== b && (a.originalEvent.returnValue = a.result)
    }}}, simulate: function (a, b, c, d) {
        var e = fb.extend(new fb.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, fb.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, fb.Event = function (a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), this[fb.expando] = !0, void 0) : new fb.Event(a, b)
    }, fb.Event.prototype = {isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
    }, stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = g, this.stopPropagation()
    }}, fb.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        fb.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj;
            return(!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }}
    }), fb.support.focusinBubbles || fb.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0)
        };
        fb.event.special[b] = {setup: function () {
            0 === c++ && T.addEventListener(a, d, !0)
        }, teardown: function () {
            0 === --c && T.removeEventListener(a, d, !0)
        }}
    }), fb.fn.extend({on: function (a, c, d, e, f) {
        var g, i;
        if ("object" == typeof a) {
            "string" != typeof c && (d = d || c, c = b);
            for (i in a)this.on(i, c, d, a[i], f);
            return this
        }
        if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)e = h; else if (!e)return this;
        return 1 === f && (g = e, e = function (a) {
            return fb().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function () {
            fb.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj)return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
        if ("object" == typeof a) {
            for (f in a)this.off(f, c, a[f]);
            return this
        }
        return(c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function () {
            fb.event.remove(this, a, d, c)
        })
    }, trigger: function (a, b) {
        return this.each(function () {
            fb.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        var c = this[0];
        return c ? fb.event.trigger(a, b, c, !0) : void 0
    }});
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {children: !0, contents: !0, next: !0, prev: !0};
    fb.fn.extend({find: function (a) {
        var b, c = [], d = this, e = d.length;
        if ("string" != typeof a)return this.pushStack(fb(a).filter(function () {
            for (b = 0; e > b; b++)if (fb.contains(d[b], this))return!0
        }));
        for (b = 0; e > b; b++)fb.find(a, d[b], c);
        return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    }, has: function (a) {
        var b = fb(a, this), c = b.length;
        return this.filter(function () {
            for (var a = 0; c > a; a++)if (fb.contains(this, b[a]))return!0
        })
    }, not: function (a) {
        return this.pushStack(k(this, a || [], !0))
    }, filter: function (a) {
        return this.pushStack(k(this, a || [], !1))
    }, is: function (a) {
        return!!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length
    }, closest: function (a, b) {
        for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
            c = f.push(c);
            break
        }
        return this.pushStack(f.length > 1 ? fb.unique(f) : f)
    }, index: function (a) {
        return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
        var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [a] : a), d = fb.merge(this.get(), c);
        return this.pushStack(fb.unique(d))
    }, addBack: function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }}), fb.each({parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
        return fb.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return fb.dir(a, "parentNode", c)
    }, next: function (a) {
        return j(a, "nextSibling")
    }, prev: function (a) {
        return j(a, "previousSibling")
    }, nextAll: function (a) {
        return fb.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return fb.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return fb.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return fb.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return fb.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return fb.sibling(a.firstChild)
    }, contents: function (a) {
        return a.contentDocument || fb.merge([], a.childNodes)
    }}, function (a, b) {
        fb.fn[a] = function (c, d) {
            var e = fb.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e)
        }
    }), fb.extend({filter: function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, dir: function (a, c, d) {
        for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
            if (f && fb(a).is(d))break;
            e.push(a)
        }
        return e
    }, sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c
    }});
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, Pb.th = Pb.td, fb.fn.extend({text: function (a) {
        return fb.access(this, function (a) {
            return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
        }, null, a, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = l(this, a);
                b.appendChild(a)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = l(this, a);
                b.insertBefore(a, b.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function (a, b) {
        for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
        return this
    }, empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (fb.cleanData(q(a, !1)), a.textContent = "");
        return this
    }, clone: function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return fb.clone(this, a, b)
        })
    }, html: function (a) {
        return fb.access(this, function (a) {
            var c = this[0] || {}, d = 0, e = this.length;
            if (a === b && 1 === c.nodeType)return c.innerHTML;
            if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Gb, "<$1></$2>");
                try {
                    for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                    c = 0
                } catch (f) {
                }
            }
            c && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function () {
        var a = fb.map(this, function (a) {
            return[a.nextSibling, a.parentNode]
        }), b = 0;
        return this.domManip(arguments, function (c) {
            var d = a[b++], e = a[b++];
            e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d))
        }, !0), b ? this : this.remove()
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, b, c) {
        a = $.apply([], a);
        var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
        if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p))return this.each(function (d) {
            var e = l.eq(d);
            r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
        });
        if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
            for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++)h = d, j !== o && (h = fb.clone(h, !0, !0), g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
            if (g)for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++)h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")))
        }
        return this
    }}), fb.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        fb.fn[a] = function (a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++)c = g === f ? this : this.clone(!0), fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }), fb.extend({clone: function (a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
        if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++)r(f[d], g[d]);
        if (b)if (c)for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++)p(f[d], g[d]); else p(a, h);
        return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
    }, buildFragment: function (a, b, c, d) {
        for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)if (e = a[k], e || 0 === e)if ("object" === fb.type(e))fb.merge(n, e.nodeType ? [e] : e); else if (Ib.test(e)) {
            for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || ["", ""])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], j = h[0]; j--;)f = f.lastChild;
            fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
        } else n.push(b.createTextNode(e));
        for (m.textContent = "", k = 0; e = n[k++];)if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))for (j = 0; e = f[j++];)Mb.test(e.type || "") && c.push(e);
        return m
    }, cleanData: function (a) {
        for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
            if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                if (f = Object.keys(c.events || {}), f.length)for (i = 0; (g = f[i]) !== b; i++)j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                qb.cache[h] && delete qb.cache[h]
            }
            delete pb.cache[d[pb.expando]]
        }
    }, _evalUrl: function (a) {
        return fb.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), fb.fn.extend({wrapAll: function (a) {
        var b;
        return fb.isFunction(a) ? this.each(function (b) {
            fb(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
            for (var a = this; a.firstElementChild;)a = a.firstElementChild;
            return a
        }).append(this)), this)
    }, wrapInner: function (a) {
        return fb.isFunction(a) ? this.each(function (b) {
            fb(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
            var b = fb(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = fb.isFunction(a);
        return this.each(function (c) {
            fb(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
        }).end()
    }});
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {BODY: "block"}, Yb = {position: "absolute", visibility: "hidden", display: "block"}, Zb = {letterSpacing: 0, fontWeight: 400}, $b = ["Top", "Right", "Bottom", "Left"], _b = ["Webkit", "O", "Moz", "ms"];
    fb.fn.extend({css: function (a, c) {
        return fb.access(this, function (a, c, d) {
            var e, f, g = {}, h = 0;
            if (fb.isArray(c)) {
                for (e = u(a), f = c.length; f > h; h++)g[c[h]] = fb.css(a, c[h], !1, e);
                return g
            }
            return d !== b ? fb.style(a, c, d) : fb.css(a, c)
        }, a, c, arguments.length > 1)
    }, show: function () {
        return v(this, !0)
    }, hide: function () {
        return v(this)
    }, toggle: function (a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            t(this) ? fb(this).show() : fb(this).hide()
        })
    }}), fb.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = Qb(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var f, g, h, i = fb.camelCase(c), j = a.style;
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], d === b ? h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set"in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
        }
    }, css: function (a, c, d, e) {
        var f, g, h, i = fb.camelCase(c);
        return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], h && "get"in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f
    }}), Qb = function (a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, fb.each(["height", "width"], function (a, b) {
        fb.cssHooks[b] = {get: function (a, c, d) {
            return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function () {
                return y(a, b, d)
            }) : y(a, b, d) : void 0
        }, set: function (a, c, d) {
            var e = d && u(a);
            return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
        }}
    }), fb(function () {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {get: function (a, b) {
            return b ? fb.swap(a, {display: "inline-block"}, Qb, [a, "marginRight"]) : void 0
        }}), !fb.support.pixelPosition && fb.fn.position && fb.each(["top", "left"], function (a, b) {
            fb.cssHooks[b] = {get: function (a, c) {
                return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0
            }}
        })
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, fb.expr.filters.visible = function (a) {
        return!fb.expr.filters.hidden(a)
    }), fb.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        fb.cssHooks[a + b] = {expand: function (c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
            return e
        }}, Tb.test(a) || (fb.cssHooks[a + b].set = w)
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({serialize: function () {
        return fb.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var a = fb.prop(this, "elements");
            return a ? fb.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a))
        }).map(function (a, b) {
            var c = fb(this).val();
            return null == c ? null : fb.isArray(c) ? fb.map(c, function (a) {
                return{name: b.name, value: a.replace(cc, "\r\n")}
            }) : {name: b.name, value: c.replace(cc, "\r\n")}
        }).get()
    }}), fb.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a))fb.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)B(d, a[d], c, f);
        return e.join("&").replace(ac, "+")
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        fb.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fb.fn.extend({hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function (a, c, d) {
        if ("string" != typeof a && qc)return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({url: a, type: f, dataType: "html", data: c}).done(function (a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a)
        }).complete(d && function (a, b) {
            h.each(d, g || [a.responseText, b, a])
        }), this
    }, fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        fb.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), fb.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: gc, type: "GET", isLocal: mc.test(fc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": tc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": fb.parseJSON, "text xml": fb.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
        return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a)
    }, ajaxPrefilter: C(rc), ajaxTransport: C(sc), ajax: function (a, c) {
        function d(a, c, d, h) {
            var j, l, s, t, v, x = c;
            2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fb.active || fb.event.trigger("ajaxStop")))
        }

        "object" == typeof a && (c = a, a = b), c = c || {};
        var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {readyState: 0, getResponseHeader: function (a) {
            var b;
            if (2 === u) {
                if (!h)for (h = {}; b = lc.exec(g);)h[b[1].toLowerCase()] = b[2];
                b = h[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders: function () {
            return 2 === u ? g : null
        }, setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || (a = t[c] = t[c] || a, s[a] = b), this
        }, overrideMimeType: function (a) {
            return u || (m.mimeType = a), this
        }, statusCode: function (a) {
            var b;
            if (a)if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else w.always(a[w.status]);
            return this
        }, abort: function (a) {
            var b = a || v;
            return e && e.abort(b), d(0, b), this
        }};
        if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [""], null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), D(rc, m, c, w), 2 === u)return w;
        k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
        for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
        if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))return w.abort();
        v = "abort";
        for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
        if (e = D(sc, m, c, w)) {
            w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                w.abort("timeout")
            }, m.timeout));
            try {
                u = 1, e.send(s, d)
            } catch (x) {
                if (!(2 > u))throw x;
                d(-1, x)
            }
        } else d(-1, "No Transport");
        return w
    }, getJSON: function (a, b, c) {
        return fb.get(a, b, c, "json")
    }, getScript: function (a, c) {
        return fb.get(a, b, c, "script")
    }}), fb.each(["get", "post"], function (a, c) {
        fb[c] = function (a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({url: a, type: c, dataType: f, data: d, success: e})
        }
    }), fb.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
        return fb.globalEval(a), a
    }}}), fb.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fb.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return{send: function (d, e) {
                b = fb("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                    b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                }), T.head.appendChild(b[0])
            }, abort: function () {
                c && c()
            }}
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = vc.pop() || fb.expando + "_" + hc++;
        return this[a] = !0, a
    }}), fb.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || fb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), fb.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var xc = fb.ajaxSettings.xhr(), yc = {0: 200, 1223: 204}, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function () {
        for (var a in Ac)Ac[a]();
        Ac = b
    }), fb.support.cors = !!xc && "withCredentials"in xc, fb.support.ajax = xc = !!xc, fb.ajaxTransport(function (a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {send: function (d, e) {
            var f, g, h = a.xhr();
            if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (f in a.xhrFields)h[f] = a.xhrFields[f];
            a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
            for (f in d)h.setRequestHeader(f, d[f]);
            c = function (a) {
                return function () {
                    c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {text: h.responseText} : b, h.getAllResponseHeaders()))
                }
            }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null)
        }, abort: function () {
            c && c()
        }} : void 0
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [L], Hc = {"*": [function (a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]};
    fb.Animation = fb.extend(J, {tweener: function (a, b) {
        fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b)
    }, prefilter: function (a, b) {
        b ? Gc.unshift(a) : Gc.push(a)
    }}), fb.Tween = M, M.prototype = {constructor: M, init: function (a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
    }, cur: function () {
        var a = M.propHooks[this.prop];
        return a && a.get ? a.get(this) : M.propHooks._default.get(this)
    }, run: function (a) {
        var b, c = M.propHooks[this.prop];
        return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
    }}, M.prototype.init.prototype = M.prototype, M.propHooks = {_default: {get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set: function (a) {
        fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, fb.each(["toggle", "show", "hide"], function (a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), fb.fn.extend({fadeTo: function (a, b, c, d) {
        return this.filter(t).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function () {
            var b = J(this, fb.extend({}, a), f);
            (e || qb.get(this, "finish")) && b.stop(!0)
        };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, c, d) {
        var e = function (a) {
            var b = a.stop;
            delete a.stop, b(d)
        };
        return"string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
            if (c)g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && Fc.test(c) && e(g[c]);
            for (c = f.length; c--;)f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
            (b || !d) && fb.dequeue(this, a)
        })
    }, finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
            var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
            for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
        })
    }}), fb.each({slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        fb.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fb.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {complete: c || !c && b || fb.isFunction(a) && a, duration: a, easing: c && b || b && !fb.isFunction(b) && b};
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
        }, d
    }, fb.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }}, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function () {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++)a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b
    }, fb.fx.timer = function (a) {
        a() && fb.timers.push(a) && fb.fx.start()
    }, fb.fx.interval = 13, fb.fx.start = function () {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval))
    }, fb.fx.stop = function () {
        clearInterval(Cc), Cc = null
    }, fb.fx.speeds = {slow: 600, fast: 200, _default: 400}, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function (a) {
        return fb.grep(fb.timers,function (b) {
            return a === b.elem
        }).length
    }), fb.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            fb.offset.setOffset(this, a, b)
        });
        var c, d, e = this[0], f = {top: 0, left: 0}, g = e && e.ownerDocument;
        if (g)return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {top: f.top + d.pageYOffset - c.clientTop, left: f.left + d.pageXOffset - c.clientLeft}) : f
    }, fb.offset = {setOffset: function (a, b, c) {
        var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
    }}, fb.fn.extend({position: function () {
        if (this[0]) {
            var a, b, c = this[0], d = {top: 0, left: 0};
            return"fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), d.left += fb.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - fb.css(c, "marginTop", !0), left: b.left - d.left - fb.css(c, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");)a = a.offsetParent;
            return a || U
        })
    }}), fb.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function (f) {
            return fb.access(this, function (c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, void 0)
            }, c, f, arguments.length, null)
        }
    }), fb.each({Height: "height", Width: "width"}, function (a, c) {
        fb.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            fb.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function (c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), fb.fn.size = function () {
        return this.length
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function () {
        return fb
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb)
}(window), "undefined" == typeof jQuery)throw new Error("Bootstrap requires jQuery");
+function (a) {
    function b() {
        var a = document.createElement("bootstrap"), b = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
        for (var c in b)if (void 0 !== a.style[c])return{end: b[c]}
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b()
    })
}(jQuery), +function (a) {
    var b = '[data-dismiss="alert"]', c = function (c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function (b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }

        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), +function (a) {
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {loadingText: "loading..."}, b.prototype.setState = function (a) {
        var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function () {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), +function (a) {
    var b = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, b.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function (b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function () {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function (b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap)return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0, f && this.pause();
        var j = a.Event("slide.bs.carousel", {relatedTarget: e[0], direction: g});
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end,function () {
                    e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                        i.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return f && this.cycle(), this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), +function (a) {
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {toggle: !0}, b.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning)return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function () {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition)return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), +function (a) {
    function b() {
        a(d).remove(), a(e).each(function (b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented())return;
                f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
            }
            return!1
        }
    }, f.prototype.keydown = function (b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode)return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function (b) {
        return this.each(function () {
            var c = a(this), d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form",function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(jQuery), +function (a) {
    var b = function (b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, b.prototype.toggle = function (a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function (b) {
        var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {relatedTarget: b});
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end,function () {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function (c, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({remote: !/#/.test(d) && d}, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function () {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal",function () {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), +function (a) {
    var b = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1}, b.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus", i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay, hide: b.delay}), b
    }, b.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show), void 0) : c.show()
    }, b.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide), void 0) : c.hide()
    }, b.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented())return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, e = /\s?auto?\s?/i, f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({top: 0, left: 0, display: "block"}).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = "body" == this.options.container ? window.innerWidth : j.outerWidth(), n = "body" == this.options.container ? window.innerHeight : j.outerHeight(), o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
        }
    }, b.prototype.applyPlacement = function (a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    }, b.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function () {
        function b() {
            "in" != c.hoverState && d.detach()
        }

        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    }, b.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function () {
        return this.getTitle()
    }, b.prototype.getPosition = function () {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {width: b.offsetWidth, height: b.offsetHeight}, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
        return"bottom" == a ? {top: b.top + b.height, left: b.left + b.width / 2 - c / 2} : "top" == a ? {top: b.top - d, left: b.left + b.width / 2 - c / 2} : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {top: b.top + b.height / 2 - d / 2, left: b.left + b.width}
    }, b.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function () {
        this.enabled = !0
    }, b.prototype.disable = function () {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function (b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c, this
    }
}(jQuery), +function (a) {
    var b = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
        return a.fn.popover = c, this
    }
}(jQuery), +function (a) {
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }

    b.DEFAULTS = {offset: 10}, b.prototype.refresh = function () {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        {
            var c = this;
            this.$body.find(this.selector).map(function () {
                var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
                return f && f.length && [
                    [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                ] || null
            }).sort(function (a, b) {
                return a[0] - b[0]
            }).each(function () {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d)return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), +function (a) {
    var b = function (b) {
        this.element = a(b)
    };
    b.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
                    b.trigger({type: "shown.bs.tab", relatedTarget: e})
                })
            }
        }
    }, b.prototype.activate = function (b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }

        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), +function (a) {
    var b = function (c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {offset: 0}, b.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({top: document.body.offsetHeight - h - this.$element.height()}))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
        return a.fn.affix = c, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery), function () {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function (a) {
        return a instanceof x ? a : this instanceof x ? (this._wrapped = a, void 0) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.4";
    var y = x.each = x.forEach = function (a, b, d) {
        if (null != a)if (l && a.forEach === l)a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)if (b.call(d, a[e], e, a) === c)return
        } else for (var g in a)if (x.has(a, g) && b.call(d, a[g], g, a) === c)return
    };
    x.map = x.collect = function (a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n)return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function (a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        }), !e)throw new TypeError(z);
        return c
    }, x.reduceRight = x.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o)return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function (h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
        }), !e)throw new TypeError(z);
        return c
    }, x.find = x.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function (a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, x.reject = function (a, b, c) {
        return x.filter(a, function (a, d, e) {
            return!b.call(c, a, d, e)
        }, c)
    }, x.every = x.all = function (a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function (a, f, g) {
            return(e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function (a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function (a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !!e)
    };
    x.contains = x.include = function (a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function (a) {
            return a === b
        })
    }, x.invoke = function (a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function (a) {
            return(d ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function (a, b) {
        return x.map(a, function (a) {
            return a[b]
        })
    }, x.where = function (a, b, c) {
        return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function (a) {
            for (var c in b)if (b[c] !== a[c])return!1;
            return!0
        })
    }, x.findWhere = function (a, b) {
        return x.where(a, b, !0)
    }, x.max = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a))return-1 / 0;
        var d = {computed: -1 / 0, value: -1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {value: a, computed: g})
        }), d.value
    }, x.min = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a))return 1 / 0;
        var d = {computed: 1 / 0, value: 1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {value: a, computed: g})
        }), d.value
    }, x.shuffle = function (a) {
        var b, c = 0, d = [];
        return y(a, function (a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    };
    var B = function (a) {
        return x.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    x.sortBy = function (a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a,function (a, b, e) {
            return{value: a, index: b, criteria: d.call(c, a, b, e)}
        }).sort(function (a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)return 1;
                if (d > c || void 0 === d)return-1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var C = function (a, b, c, d) {
        var e = {}, f = B(b || x.identity);
        return y(a, function (b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }), e
    };
    x.groupBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    }, x.countBy = function (a, b, c) {
        return C(a, b, c, function (a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++
        })
    }, x.sortedIndex = function (a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, x.toArray = function (a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }, x.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = x.drop = function (a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function (a) {
        return x.filter(a, x.identity)
    };
    var D = function (a, b, c) {
        return y(a, function (a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c
    };
    x.flatten = function (a, b) {
        return D(a, b, [])
    }, x.without = function (a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function (a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function (c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }), f
    }, x.union = function () {
        return x.uniq(i.apply(d, arguments))
    }, x.intersection = function (a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function (a) {
            return x.every(b, function (b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function (a) {
            return!x.contains(b, a)
        })
    }, x.zip = function () {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++)c[d] = x.pluck(a, "" + d);
        return c
    }, x.object = function (a, b) {
        if (null == a)return{};
        for (var c = {}, d = 0, e = a.length; e > d; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, x.indexOf = function (a, b, c) {
        if (null == a)return-1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c)return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)return a.indexOf(b, c);
        for (; e > d; d++)if (a[d] === b)return d;
        return-1
    }, x.lastIndexOf = function (a, b, c) {
        if (null == a)return-1;
        var d = null != c;
        if (t && a.lastIndexOf === t)return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--;)if (a[e] === b)return e;
        return-1
    }, x.range = function (a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;)f[e++] = a, a += c;
        return f
    }, x.bind = function (a, b) {
        if (a.bind === w && w)return w.apply(a, h.call(arguments, 1));
        var c = h.call(arguments, 2);
        return function () {
            return a.apply(b, c.concat(h.call(arguments)))
        }
    }, x.partial = function (a) {
        var b = h.call(arguments, 1);
        return function () {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    }, x.bindAll = function (a) {
        var b = h.call(arguments, 1);
        return 0 === b.length && (b = x.functions(a)), y(b, function (b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function (a, b) {
        var c = {};
        return b || (b = x.identity), function () {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, x.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, x.defer = function (a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function (a, b) {
        var c, d, e, f, g = 0, h = function () {
            g = new Date, e = null, f = a.apply(c, d)
        };
        return function () {
            var i = new Date, j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
        }
    }, x.debounce = function (a, b, c) {
        var d, e;
        return function () {
            var f = this, g = arguments, h = function () {
                d = null, c || (e = a.apply(f, g))
            }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
        }
    }, x.once = function (a) {
        var b, c = !1;
        return function () {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    }, x.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, x.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function (a, b) {
        return 0 >= a ? b() : function () {
            return--a < 1 ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function (a) {
        if (a !== Object(a))throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)x.has(a, c) && (b[b.length] = c);
        return b
    }, x.values = function (a) {
        var b = [];
        for (var c in a)x.has(a, c) && b.push(a[c]);
        return b
    }, x.pairs = function (a) {
        var b = [];
        for (var c in a)x.has(a, c) && b.push([c, a[c]]);
        return b
    }, x.invert = function (a) {
        var b = {};
        for (var c in a)x.has(a, c) && (b[a[c]] = c);
        return b
    }, x.functions = x.methods = function (a) {
        var b = [];
        for (var c in a)x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)a[c] = b[c]
        }), a
    }, x.pick = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.omit = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a)x.contains(c, e) || (b[e] = a[e]);
        return b
    }, x.defaults = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)null == a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function (a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function (a, b) {
        return b(a), a
    };
    var E = function (a, b, c, d) {
        if (a === b)return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))return!1;
        switch (e) {
            case"[object String]":
                return a == String(b);
            case"[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case"[object Date]":
            case"[object Boolean]":
                return+a == +b;
            case"[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)return!1;
        for (var f = c.length; f--;)if (c[f] == a)return d[f] == b;
        c.push(a), d.push(b);
        var g = 0, h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length)for (; g-- && (h = E(a[g], b[g], c, d)););
        } else {
            var i = a.constructor, k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k))return!1;
            for (var l in a)if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d))))break;
            if (h) {
                for (l in b)if (x.has(b, l) && !g--)break;
                h = !g
            }
        }
        return c.pop(), d.pop(), h
    };
    x.isEqual = function (a, b) {
        return E(a, b, [], [])
    }, x.isEmpty = function (a) {
        if (null == a)return!0;
        if (x.isArray(a) || x.isString(a))return 0 === a.length;
        for (var b in a)if (x.has(a, b))return!1;
        return!0
    }, x.isElement = function (a) {
        return!(!a || 1 !== a.nodeType)
    }, x.isArray = u || function (a) {
        return"[object Array]" == j.call(a)
    }, x.isObject = function (a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        x["is" + a] = function (b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (a) {
        return!(!a || !x.has(a, "callee"))
    }), "function" != typeof/./ && (x.isFunction = function (a) {
        return"function" == typeof a
    }), x.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, x.isNaN = function (a) {
        return x.isNumber(a) && a != +a
    }, x.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function (a) {
        return null === a
    }, x.isUndefined = function (a) {
        return void 0 === a
    }, x.has = function (a, b) {
        return k.call(a, b)
    }, x.noConflict = function () {
        return a._ = b, this
    }, x.identity = function (a) {
        return a
    }, x.times = function (a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++)d[e] = b.call(c, e);
        return d
    }, x.random = function (a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    };
    var F = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
    F.unescape = x.invert(F.escape);
    var G = {escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"), unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")};
    x.each(["escape", "unescape"], function (a) {
        x[a] = function (b) {
            return null == b ? "" : ("" + b).replace(G[a], function (b) {
                return F[a][b]
            })
        }
    }), x.result = function (a, b) {
        if (null == a)return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function (a) {
        y(x.functions(a), function (b) {
            var c = x[b] = a[b];
            x.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments), L.call(this, c.apply(x, a))
            }
        })
    };
    var H = 0;
    x.uniqueId = function (a) {
        var b = ++H + "";
        return a ? a + b : b
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var I = /(.)^/, J = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([(c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function (b, c, d, e, h) {
            return g += a.slice(f, h).replace(K, function (a) {
                return"\\" + J[a]
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g)
        } catch (h) {
            throw h.source = g, h
        }
        if (b)return d(b, x);
        var i = function (a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i
    }, x.chain = function (a) {
        return x(a).chain()
    };
    var L = function (a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], L.call(this, c)
        }
    }), y(["concat", "join", "slice"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            return L.call(this, b.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {chain: function () {
        return this._chain = !0, this
    }, value: function () {
        return this._wrapped
    }})
}.call(this);
var PasswordStrength = function () {
    var a = /\d.*?\d.*?\d/, b = /[!@#$%^&*?_~].*?[!@#$%^&*?_~]/, c = /([a-z].*[A-Z])|([A-Z].*[a-z])/, d = /[!@#\$%^&*?_~]/;
    this.username = null, this.password = null, this.score = 0, this.status = null, this.test = function () {
        return this.score = 0, this.containInvalidMatches() ? this.status = "invalid" : (this.score += this.scoreFor("password_size"), this.score += this.scoreFor("numbers"), this.score += this.scoreFor("symbols"), this.score += this.scoreFor("uppercase_lowercase"), this.score += this.scoreFor("numbers_chars"), this.score += this.scoreFor("numbers_symbols"), this.score += this.scoreFor("symbols_chars"), this.score += this.scoreFor("only_chars"), this.score += this.scoreFor("only_numbers"), this.score += this.scoreFor("username"), this.score += this.scoreFor("sequences"), this.score += this.scoreFor("repetitions"), this.score < 0 && (this.score = 0), this.score > 100 && (this.score = 100), this.score < 35 && (this.status = "weak"), this.score >= 35 && this.score < 70 && (this.status = "good"), this.score >= 70 && (this.status = "strong")), this.score
    }, this.scoreFor = function (e) {
        var f = 0;
        switch (e) {
            case"password_size":
                f = this.password.length < 10 ? -100 : 4 * this.password.length;
                break;
            case"numbers":
                this.password.match(a) && (f = 5);
                break;
            case"symbols":
                this.password.match(b) && (f = 5);
                break;
            case"uppercase_lowercase":
                this.password.match(c) && (f = 10);
                break;
            case"numbers_chars":
                this.password.match(/[a-z]/i) && this.password.match(/[0-9]/) && (f = 15);
                break;
            case"numbers_symbols":
                this.password.match(/[0-9]/) && this.password.match(d) && (f = 15);
                break;
            case"symbols_chars":
                this.password.match(/[a-z]/i) && this.password.match(d) && (f = 15);
                break;
            case"only_chars":
                this.password.match(/^[a-z]+$/i) && (f = -15);
                break;
            case"only_numbers":
                this.password.match(/^\d+$/i) && (f = -15);
                break;
            case"username":
                this.password == this.username ? f = -100 : -1 != this.password.indexOf(this.username) && (f = -15);
                break;
            case"sequences":
                f += -15 * this.sequences(this.password), f += -15 * this.sequences(this.reversed(this.password));
                break;
            case"repetitions":
                f += -(4 * this.repetitions(this.password, 2)), f += -(3 * this.repetitions(this.password, 3)), f += -(2 * this.repetitions(this.password, 4))
        }
        return f
    }, this.isGood = function () {
        return"good" == this.status
    }, this.isWeak = function () {
        return"weak" == this.status
    }, this.isStrong = function () {
        return"strong" == this.status
    }, this.isInvalid = function () {
        return"invalid" == this.status
    }, this.isValid = function (a) {
        return"strong" == a ? this.isStrong() : "good" == a ? this.isStrong() || this.isGood() : !this.containInvalidMatches()
    }, this.containInvalidMatches = function () {
        return this.exclude ? this.exclude.test ? this.exclude.test(this.password.toString()) : !1 : !1
    }, this.sequences = function (a) {
        for (var b, c, d = 0, e = 0, f = [], g = a.length, h = 0; g > h; h++)c = a.charCodeAt(h), b = f[f.length - 1], f.push(c), b && (c == b + 1 || b == c ? e += 1 : e = 0), 2 == e && (d += 1);
        return d
    }, this.repetitions = function (a, b) {
        for (var c, d, e, f = 0, g = {}, h = a.length, i = 0; h > i; i++)if (c = a.substr(i, b), d = 0, e = a, !(g[c] || c.length < b)) {
            for (g[c] = !0; -1 != (i = e.indexOf(c));)d += 1, e = e.substr(i + 1);
            d > 1 && (f += 1)
        }
        return f
    }, this.reversed = function (a) {
        for (var b = "", c = a.length, d = c - 1; d >= 0; d--)b += a.charAt(d);
        return b
    }
};
PasswordStrength.test = function (a, b) {
    return strength = new PasswordStrength, strength.username = a, strength.password = b, strength.test(), strength
}, function (a) {
    a.strength = function (b, c, d, e) {
        "function" == typeof d ? (e = d, d = {}) : d || (d = {});
        var f = a(b), g = a(c), h = new PasswordStrength;
        h.exclude = d.exclude, e = e || a.strength.callback;
        var i = function () {
            h.username = a(f).val(), 0 == a(f).length && (h.username = b), h.password = a(g).val(), 0 == a(g).length && (h.password = c), h.test(), e(f, g, h)
        };
        a(f).keydown(i), a(f).keyup(i), a(g).keydown(i), a(g).keyup(i)
    }, a.extend(a.strength, {callback: function (b, c, d) {
        var e = a(c).next("img.strength");
        e.length || (a(c).after("<img class='strength'>"), e = a("img.strength")), a(e).removeClass("weak").removeClass("good").removeClass("strong").addClass(d.status).attr("src", a.strength[d.status + "Image"])
    }, weakImage: "/images/weak.png", goodImage: "/images/good.png", strongImage: "/images/strong.png"})
}(jQuery);
var sjcl = {cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: {corrupt: function (a) {
    this.toString = function () {
        return"CORRUPT: " + this.message
    }, this.message = a
}, invalid: function (a) {
    this.toString = function () {
        return"INVALID: " + this.message
    }, this.message = a
}, bug: function (a) {
    this.toString = function () {
        return"BUG: " + this.message
    }, this.message = a
}, notReady: function (a) {
    this.toString = function () {
        return"NOT READY: " + this.message
    }, this.message = a
}}};
"undefined" != typeof module && module.exports && (module.exports = sjcl), sjcl.cipher.aes = function (a) {
    this._tables[0][0][0] || this._precompute();
    var b, c, d, e, f, g = this._tables[0][4], h = this._tables[1], i = a.length, j = 1;
    if (4 !== i && 6 !== i && 8 !== i)throw new sjcl.exception.invalid("invalid aes key size");
    for (this._key = [e = a.slice(0), f = []], b = i; 4 * i + 28 > b; b++)d = e[b - 1], (b % i === 0 || 8 === i && b % i === 4) && (d = g[d >>> 24] << 24 ^ g[d >> 16 & 255] << 16 ^ g[d >> 8 & 255] << 8 ^ g[255 & d], b % i === 0 && (d = d << 8 ^ d >>> 24 ^ j << 24, j = j << 1 ^ 283 * (j >> 7))), e[b] = e[b - i] ^ d;
    for (c = 0; b; c++, b--)d = e[3 & c ? b : b - 4], f[c] = 4 >= b || 4 > c ? d : h[0][g[d >>> 24]] ^ h[1][g[d >> 16 & 255]] ^ h[2][g[d >> 8 & 255]] ^ h[3][g[255 & d]]
}, sjcl.cipher.aes.prototype = {encrypt: function (a) {
    return this._crypt(a, 0)
}, decrypt: function (a) {
    return this._crypt(a, 1)
}, _tables: [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
], _precompute: function () {
    var a, b, c, d, e, f, g, h, i, j = this._tables[0], k = this._tables[1], l = j[4], m = k[4], n = [], o = [];
    for (a = 0; 256 > a; a++)o[(n[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
    for (b = c = 0; !l[b]; b ^= d || 1, c = o[c] || 1)for (g = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4, g = g >> 8 ^ 255 & g ^ 99, l[b] = g, m[g] = b, f = n[e = n[d = n[b]]], i = 16843009 * f ^ 65537 * e ^ 257 * d ^ 16843008 * b, h = 257 * n[g] ^ 16843008 * g, a = 0; 4 > a; a++)j[a][b] = h = h << 24 ^ h >>> 8, k[a][g] = i = i << 24 ^ i >>> 8;
    for (a = 0; 5 > a; a++)j[a] = j[a].slice(0), k[a] = k[a].slice(0)
}, _crypt: function (a, b) {
    if (4 !== a.length)throw new sjcl.exception.invalid("invalid aes block size");
    var c, d, e, f, g = this._key[b], h = a[0] ^ g[0], i = a[b ? 3 : 1] ^ g[1], j = a[2] ^ g[2], k = a[b ? 1 : 3] ^ g[3], l = g.length / 4 - 2, m = 4, n = [0, 0, 0, 0], o = this._tables[b], p = o[0], q = o[1], r = o[2], s = o[3], t = o[4];
    for (f = 0; l > f; f++)c = p[h >>> 24] ^ q[i >> 16 & 255] ^ r[j >> 8 & 255] ^ s[255 & k] ^ g[m], d = p[i >>> 24] ^ q[j >> 16 & 255] ^ r[k >> 8 & 255] ^ s[255 & h] ^ g[m + 1], e = p[j >>> 24] ^ q[k >> 16 & 255] ^ r[h >> 8 & 255] ^ s[255 & i] ^ g[m + 2], k = p[k >>> 24] ^ q[h >> 16 & 255] ^ r[i >> 8 & 255] ^ s[255 & j] ^ g[m + 3], m += 4, h = c, i = d, j = e;
    for (f = 0; 4 > f; f++)n[b ? 3 & -f : f] = t[h >>> 24] << 24 ^ t[i >> 16 & 255] << 16 ^ t[j >> 8 & 255] << 8 ^ t[255 & k] ^ g[m++], c = h, h = i, i = j, j = k, k = c;
    return n
}}, sjcl.bitArray = {bitSlice: function (a, b, c) {
    return a = sjcl.bitArray._shiftRight(a.slice(b / 32), 32 - (31 & b)).slice(1), void 0 === c ? a : sjcl.bitArray.clamp(a, c - b)
}, extract: function (a, b, c) {
    var d, e = Math.floor(-b - c & 31);
    return d = -32 & (b + c - 1 ^ b) ? a[b / 32 | 0] << 32 - e ^ a[b / 32 + 1 | 0] >>> e : a[b / 32 | 0] >>> e, d & (1 << c) - 1
}, concat: function (a, b) {
    if (0 === a.length || 0 === b.length)return a.concat(b);
    var c = a[a.length - 1], d = sjcl.bitArray.getPartial(c);
    return 32 === d ? a.concat(b) : sjcl.bitArray._shiftRight(b, d, 0 | c, a.slice(0, a.length - 1))
}, bitLength: function (a) {
    var b, c = a.length;
    return 0 === c ? 0 : (b = a[c - 1], 32 * (c - 1) + sjcl.bitArray.getPartial(b))
}, clamp: function (a, b) {
    if (32 * a.length < b)return a;
    a = a.slice(0, Math.ceil(b / 32));
    var c = a.length;
    return b = 31 & b, c > 0 && b && (a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)), a
}, partial: function (a, b, c) {
    return 32 === a ? b : (c ? 0 | b : b << 32 - a) + 1099511627776 * a
}, getPartial: function (a) {
    return Math.round(a / 1099511627776) || 32
}, equal: function (a, b) {
    if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b))return!1;
    var c, d = 0;
    for (c = 0; c < a.length; c++)d |= a[c] ^ b[c];
    return 0 === d
}, _shiftRight: function (a, b, c, d) {
    var e, f, g = 0;
    for (void 0 === d && (d = []); b >= 32; b -= 32)d.push(c), c = 0;
    if (0 === b)return d.concat(a);
    for (e = 0; e < a.length; e++)d.push(c | a[e] >>> b), c = a[e] << 32 - b;
    return g = a.length ? a[a.length - 1] : 0, f = sjcl.bitArray.getPartial(g), d.push(sjcl.bitArray.partial(b + f & 31, b + f > 32 ? c : d.pop(), 1)), d
}, _xor4: function (a, b) {
    return[a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]]
}}, sjcl.codec.utf8String = {fromBits: function (a) {
    var b, c, d = "", e = sjcl.bitArray.bitLength(a);
    for (b = 0; e / 8 > b; b++)0 === (3 & b) && (c = a[b / 4]), d += String.fromCharCode(c >>> 24), c <<= 8;
    return decodeURIComponent(escape(d))
}, toBits: function (a) {
    a = unescape(encodeURIComponent(a));
    var b, c = [], d = 0;
    for (b = 0; b < a.length; b++)d = d << 8 | a.charCodeAt(b), 3 === (3 & b) && (c.push(d), d = 0);
    return 3 & b && c.push(sjcl.bitArray.partial(8 * (3 & b), d)), c
}}, sjcl.codec.hex = {fromBits: function (a) {
    var b, c = "";
    for (b = 0; b < a.length; b++)c += ((0 | a[b]) + 0xf00000000000).toString(16).substr(4);
    return c.substr(0, sjcl.bitArray.bitLength(a) / 4)
}, toBits: function (a) {
    var b, c, d = [];
    for (a = a.replace(/\s|0x/g, ""), c = a.length, a += "00000000", b = 0; b < a.length; b += 8)d.push(0 ^ parseInt(a.substr(b, 8), 16));
    return sjcl.bitArray.clamp(d, 4 * c)
}}, sjcl.codec.base64 = {_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fromBits: function (a, b, c) {
    var d, e = "", f = 0, g = sjcl.codec.base64._chars, h = 0, i = sjcl.bitArray.bitLength(a);
    for (c && (g = g.substr(0, 62) + "-_"), d = 0; 6 * e.length < i;)e += g.charAt((h ^ a[d] >>> f) >>> 26), 6 > f ? (h = a[d] << 6 - f, f += 26, d++) : (h <<= 6, f -= 6);
    for (; 3 & e.length && !b;)e += "=";
    return e
}, toBits: function (a, b) {
    a = a.replace(/\s|=/g, "");
    var c, d, e = [], f = 0, g = sjcl.codec.base64._chars, h = 0;
    for (b && (g = g.substr(0, 62) + "-_"), c = 0; c < a.length; c++) {
        if (d = g.indexOf(a.charAt(c)), 0 > d)throw new sjcl.exception.invalid("this isn't base64!");
        f > 26 ? (f -= 26, e.push(h ^ d >>> f), h = d << 32 - f) : (f += 6, h ^= d << 32 - f)
    }
    return 56 & f && e.push(sjcl.bitArray.partial(56 & f, h, 1)), e
}}, sjcl.codec.base64url = {fromBits: function (a) {
    return sjcl.codec.base64.fromBits(a, 1, 1)
}, toBits: function (a) {
    return sjcl.codec.base64.toBits(a, 1)
}}, sjcl.hash.sha256 = function (a) {
    this._key[0] || this._precompute(), a ? (this._h = a._h.slice(0), this._buffer = a._buffer.slice(0), this._length = a._length) : this.reset()
}, sjcl.hash.sha256.hash = function (a) {
    return(new sjcl.hash.sha256).update(a).finalize()
}, sjcl.hash.sha256.prototype = {blockSize: 512, reset: function () {
    return this._h = this._init.slice(0), this._buffer = [], this._length = 0, this
}, update: function (a) {
    "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a));
    var b, c = this._buffer = sjcl.bitArray.concat(this._buffer, a), d = this._length, e = this._length = d + sjcl.bitArray.bitLength(a);
    for (b = 512 + d & -512; e >= b; b += 512)this._block(c.splice(0, 16));
    return this
}, finalize: function () {
    var a, b = this._buffer, c = this._h;
    for (b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]), a = b.length + 2; 15 & a; a++)b.push(0);
    for (b.push(Math.floor(this._length / 4294967296)), b.push(0 | this._length); b.length;)this._block(b.splice(0, 16));
    return this.reset(), c
}, _init: [], _key: [], _precompute: function () {
    function a(a) {
        return 4294967296 * (a - Math.floor(a)) | 0
    }

    var b, c = 0, d = 2;
    a:for (; 64 > c; d++) {
        for (b = 2; d >= b * b; b++)if (d % b === 0)continue a;
        8 > c && (this._init[c] = a(Math.pow(d, .5))), this._key[c] = a(Math.pow(d, 1 / 3)), c++
    }
}, _block: function (a) {
    var b, c, d, e, f = a.slice(0), g = this._h, h = this._key, i = g[0], j = g[1], k = g[2], l = g[3], m = g[4], n = g[5], o = g[6], p = g[7];
    for (b = 0; 64 > b; b++)16 > b ? c = f[b] : (d = f[b + 1 & 15], e = f[b + 14 & 15], c = f[15 & b] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + f[15 & b] + f[b + 9 & 15] | 0), c = c + p + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (o ^ m & (n ^ o)) + h[b], p = o, o = n, n = m, m = l + c | 0, l = k, k = j, j = i, i = c + (j & k ^ l & (j ^ k)) + (j >>> 2 ^ j >>> 13 ^ j >>> 22 ^ j << 30 ^ j << 19 ^ j << 10) | 0;
    g[0] = g[0] + i | 0, g[1] = g[1] + j | 0, g[2] = g[2] + k | 0, g[3] = g[3] + l | 0, g[4] = g[4] + m | 0, g[5] = g[5] + n | 0, g[6] = g[6] + o | 0, g[7] = g[7] + p | 0
}}, sjcl.mode.ccm = {name: "ccm", encrypt: function (a, b, c, d, e) {
    var f, g, h = b.slice(0), i = sjcl.bitArray, j = i.bitLength(c) / 8, k = i.bitLength(h) / 8;
    if (e = e || 64, d = d || [], 7 > j)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
    for (f = 2; 4 > f && k >>> 8 * f; f++);
    return 15 - j > f && (f = 15 - j), c = i.clamp(c, 8 * (15 - f)), g = sjcl.mode.ccm._computeTag(a, b, c, d, e, f), h = sjcl.mode.ccm._ctrMode(a, h, c, g, e, f), i.concat(h.data, h.tag)
}, decrypt: function (a, b, c, d, e) {
    e = e || 64, d = d || [];
    var f, g, h = sjcl.bitArray, i = h.bitLength(c) / 8, j = h.bitLength(b), k = h.clamp(b, j - e), l = h.bitSlice(b, j - e);
    if (j = (j - e) / 8, 7 > i)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
    for (f = 2; 4 > f && j >>> 8 * f; f++);
    if (15 - i > f && (f = 15 - i), c = h.clamp(c, 8 * (15 - f)), k = sjcl.mode.ccm._ctrMode(a, k, c, l, e, f), g = sjcl.mode.ccm._computeTag(a, k.data, c, d, e, f), !h.equal(k.tag, g))throw new sjcl.exception.corrupt("ccm: tag doesn't match");
    return k.data
}, _computeTag: function (a, b, c, d, e, f) {
    var g, h, i, j = [], k = sjcl.bitArray, l = k._xor4;
    if (e /= 8, e % 2 || 4 > e || e > 16)throw new sjcl.exception.invalid("ccm: invalid tag length");
    if (d.length > 4294967295 || b.length > 4294967295)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
    if (g = [k.partial(8, (d.length ? 64 : 0) | e - 2 << 2 | f - 1)], g = k.concat(g, c), g[3] |= k.bitLength(b) / 8, g = a.encrypt(g), d.length)for (h = k.bitLength(d) / 8, 65279 >= h ? j = [k.partial(16, h)] : 4294967295 >= h && (j = k.concat([k.partial(16, 65534)], [h])), j = k.concat(j, d), i = 0; i < j.length; i += 4)g = a.encrypt(l(g, j.slice(i, i + 4).concat([0, 0, 0])));
    for (i = 0; i < b.length; i += 4)g = a.encrypt(l(g, b.slice(i, i + 4).concat([0, 0, 0])));
    return k.clamp(g, 8 * e)
}, _ctrMode: function (a, b, c, d, e, f) {
    var g, h, i, j = sjcl.bitArray, k = j._xor4, l = b.length, m = j.bitLength(b);
    if (i = j.concat([j.partial(8, f - 1)], c).concat([0, 0, 0]).slice(0, 4), d = j.bitSlice(k(d, a.encrypt(i)), 0, e), !l)return{tag: d, data: []};
    for (h = 0; l > h; h += 4)i[3]++, g = a.encrypt(i), b[h] ^= g[0], b[h + 1] ^= g[1], b[h + 2] ^= g[2], b[h + 3] ^= g[3];
    return{tag: d, data: j.clamp(b, m)}
}}, sjcl.mode.ocb2 = {name: "ocb2", encrypt: function (a, b, c, d, e, f) {
    if (128 !== sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");
    var g, h, i, j, k = sjcl.mode.ocb2._times2, l = sjcl.bitArray, m = l._xor4, n = [0, 0, 0, 0], o = k(a.encrypt(c)), p = [];
    for (d = d || [], e = e || 64, g = 0; g + 4 < b.length; g += 4)h = b.slice(g, g + 4), n = m(n, h), p = p.concat(m(o, a.encrypt(m(o, h)))), o = k(o);
    return h = b.slice(g), i = l.bitLength(h), j = a.encrypt(m(o, [0, 0, 0, i])), h = l.clamp(m(h.concat([0, 0, 0]), j), i), n = m(n, m(h.concat([0, 0, 0]), j)), n = a.encrypt(m(n, m(o, k(o)))), d.length && (n = m(n, f ? d : sjcl.mode.ocb2.pmac(a, d))), p.concat(l.concat(h, l.clamp(n, e)))
}, decrypt: function (a, b, c, d, e, f) {
    if (128 !== sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");
    e = e || 64;
    var g, h, i, j, k = sjcl.mode.ocb2._times2, l = sjcl.bitArray, m = l._xor4, n = [0, 0, 0, 0], o = k(a.encrypt(c)), p = sjcl.bitArray.bitLength(b) - e, q = [];
    for (d = d || [], g = 0; p / 32 > g + 4; g += 4)h = m(o, a.decrypt(m(o, b.slice(g, g + 4)))), n = m(n, h), q = q.concat(h), o = k(o);
    if (i = p - 32 * g, j = a.encrypt(m(o, [0, 0, 0, i])), h = m(j, l.clamp(b.slice(g), i).concat([0, 0, 0])), n = m(n, h), n = a.encrypt(m(n, m(o, k(o)))), d.length && (n = m(n, f ? d : sjcl.mode.ocb2.pmac(a, d))), !l.equal(l.clamp(n, e), l.bitSlice(b, p)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");
    return q.concat(l.clamp(h, i))
}, pmac: function (a, b) {
    var c, d, e = sjcl.mode.ocb2._times2, f = sjcl.bitArray, g = f._xor4, h = [0, 0, 0, 0], i = a.encrypt([0, 0, 0, 0]);
    for (i = g(i, e(e(i))), c = 0; c + 4 < b.length; c += 4)i = e(i), h = g(h, a.encrypt(g(i, b.slice(c, c + 4))));
    return d = b.slice(c), f.bitLength(d) < 128 && (i = g(i, e(i)), d = f.concat(d, [-2147483648, 0, 0, 0])), h = g(h, d), a.encrypt(g(e(g(i, e(i))), h))
}, _times2: function (a) {
    return[a[0] << 1 ^ a[1] >>> 31, a[1] << 1 ^ a[2] >>> 31, a[2] << 1 ^ a[3] >>> 31, a[3] << 1 ^ 135 * (a[0] >>> 31)]
}}, sjcl.mode.gcm = {name: "gcm", encrypt: function (a, b, c, d, e) {
    var f, g = b.slice(0), h = sjcl.bitArray;
    return e = e || 128, d = d || [], f = sjcl.mode.gcm._ctrMode(!0, a, g, d, c, e), h.concat(f.data, f.tag)
}, decrypt: function (a, b, c, d, e) {
    var f, g, h = b.slice(0), i = sjcl.bitArray, j = i.bitLength(h);
    if (e = e || 128, d = d || [], j >= e ? (g = i.bitSlice(h, j - e), h = i.bitSlice(h, 0, j - e)) : (g = h, h = []), f = sjcl.mode.gcm._ctrMode(!1, a, h, d, c, e), !i.equal(f.tag, g))throw new sjcl.exception.corrupt("gcm: tag doesn't match");
    return f.data
}, _galoisMultiply: function (a, b) {
    var c, d, e, f, g, h, i = sjcl.bitArray, j = i._xor4;
    for (f = [0, 0, 0, 0], g = b.slice(0), c = 0; 128 > c; c++) {
        for (e = 0 !== (a[Math.floor(c / 32)] & 1 << 31 - c % 32), e && (f = j(f, g)), h = 0 !== (1 & g[3]), d = 3; d > 0; d--)g[d] = g[d] >>> 1 | (1 & g[d - 1]) << 31;
        g[0] = g[0] >>> 1, h && (g[0] = g[0] ^ 225 << 24)
    }
    return f
}, _ghash: function (a, b, c) {
    var d, e, f = c.length;
    for (d = b.slice(0), e = 0; f > e; e += 4)d[0] ^= 4294967295 & c[e], d[1] ^= 4294967295 & c[e + 1], d[2] ^= 4294967295 & c[e + 2], d[3] ^= 4294967295 & c[e + 3], d = sjcl.mode.gcm._galoisMultiply(d, a);
    return d
}, _ctrMode: function (a, b, c, d, e, f) {
    {
        var g, h, i, j, k, l, m, n, o, p, q, r, s = sjcl.bitArray;
        s._xor4
    }
    for (o = c.length, p = s.bitLength(c), q = s.bitLength(d), r = s.bitLength(e), g = b.encrypt([0, 0, 0, 0]), 96 === r ? (h = e.slice(0), h = s.concat(h, [1])) : (h = sjcl.mode.gcm._ghash(g, [0, 0, 0, 0], e), h = sjcl.mode.gcm._ghash(g, h, [0, 0, Math.floor(r / 4294967296), 4294967295 & r])), i = sjcl.mode.gcm._ghash(g, [0, 0, 0, 0], d), l = h.slice(0), m = i.slice(0), a || (m = sjcl.mode.gcm._ghash(g, i, c)), k = 0; o > k; k += 4)l[3]++, j = b.encrypt(l), c[k] ^= j[0], c[k + 1] ^= j[1], c[k + 2] ^= j[2], c[k + 3] ^= j[3];
    return c = s.clamp(c, p), a && (m = sjcl.mode.gcm._ghash(g, i, c)), n = [Math.floor(q / 4294967296), 4294967295 & q, Math.floor(p / 4294967296), 4294967295 & p], m = sjcl.mode.gcm._ghash(g, m, n), j = b.encrypt(h), m[0] ^= j[0], m[1] ^= j[1], m[2] ^= j[2], m[3] ^= j[3], {tag: s.bitSlice(m, 0, f), data: c}
}}, sjcl.misc.hmac = function (a, b) {
    this._hash = b = b || sjcl.hash.sha256;
    var c, d = [
        [],
        []
    ], e = b.prototype.blockSize / 32;
    for (this._baseHash = [new b, new b], a.length > e && (a = b.hash(a)), c = 0; e > c; c++)d[0][c] = 909522486 ^ a[c], d[1][c] = 1549556828 ^ a[c];
    this._baseHash[0].update(d[0]), this._baseHash[1].update(d[1]), this._resultHash = new b(this._baseHash[0])
}, sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (a) {
    if (this._updated)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");
    return this.update(a), this.digest(a)
}, sjcl.misc.hmac.prototype.reset = function () {
    this._resultHash = new this._hash(this._baseHash[0]), this._updated = !1
}, sjcl.misc.hmac.prototype.update = function (a) {
    this._updated = !0, this._resultHash.update(a)
}, sjcl.misc.hmac.prototype.digest = function () {
    var a = this._resultHash.finalize(), b = new this._hash(this._baseHash[1]).update(a).finalize();
    return this.reset(), b
}, sjcl.misc.pbkdf2 = function (a, b, c, d, e) {
    if (c = c || 1e3, 0 > d || 0 > c)throw sjcl.exception.invalid("invalid params to pbkdf2");
    "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a)), "string" == typeof b && (b = sjcl.codec.utf8String.toBits(b)), e = e || sjcl.misc.hmac;
    var f, g, h, i, j, k = new e(a), l = [], m = sjcl.bitArray;
    for (j = 1; 32 * l.length < (d || 1); j++) {
        for (f = g = k.encrypt(m.concat(b, [j])), h = 1; c > h; h++)for (g = k.encrypt(g), i = 0; i < g.length; i++)f[i] ^= g[i];
        l = l.concat(f)
    }
    return d && (l = m.clamp(l, d)), l
}, sjcl.prng = function (a) {
    this._pools = [new sjcl.hash.sha256], this._poolEntropy = [0], this._reseedCount = 0, this._robins = {}, this._eventId = 0, this._collectorIds = {}, this._collectorIdNext = 0, this._strength = 0, this._poolStrength = 0, this._nextReseed = 0, this._key = [0, 0, 0, 0, 0, 0, 0, 0], this._counter = [0, 0, 0, 0], this._cipher = void 0, this._defaultParanoia = a, this._collectorsStarted = !1, this._callbacks = {progress: {}, seeded: {}}, this._callbackI = 0, this._NOT_READY = 0, this._READY = 1, this._REQUIRES_RESEED = 2, this._MAX_WORDS_PER_BURST = 65536, this._PARANOIA_LEVELS = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this._MILLISECONDS_PER_RESEED = 3e4, this._BITS_PER_RESEED = 80
}, sjcl.prng.prototype = {randomWords: function (a, b) {
    var c, d, e = [], f = this.isReady(b);
    if (f === this._NOT_READY)throw new sjcl.exception.notReady("generator isn't seeded");
    for (f & this._REQUIRES_RESEED && this._reseedFromPools(!(f & this._READY)), c = 0; a > c; c += 4)(c + 1) % this._MAX_WORDS_PER_BURST === 0 && this._gate(), d = this._gen4words(), e.push(d[0], d[1], d[2], d[3]);
    return this._gate(), e.slice(0, a)
}, setDefaultParanoia: function (a, b) {
    if (0 === a && "Setting paranoia=0 will ruin your security; use it only for testing" !== b)throw"Setting paranoia=0 will ruin your security; use it only for testing";
    this._defaultParanoia = a
}, addEntropy: function (a, b, c) {
    c = c || "user";
    var d, e, f, g, h = (new Date).valueOf(), i = this._robins[c], j = this.isReady(), k = 0;
    switch (d = this._collectorIds[c], void 0 === d && (d = this._collectorIds[c] = this._collectorIdNext++), void 0 === i && (i = this._robins[c] = 0), this._robins[c] = (this._robins[c] + 1) % this._pools.length, typeof a) {
        case"number":
            void 0 === b && (b = 1), this._pools[i].update([d, this._eventId++, 1, b, h, 1, 0 | a]);
            break;
        case"object":
            if (g = Object.prototype.toString.call(a), "[object Uint32Array]" === g) {
                for (f = [], e = 0; e < a.length; e++)f.push(a[e]);
                a = f
            } else for ("[object Array]" !== g && (k = 1), e = 0; e < a.length && !k; e++)"number" != typeof a[e] && (k = 1);
            if (!k) {
                if (void 0 === b)for (b = 0, e = 0; e < a.length; e++)for (f = a[e]; f > 0;)b++, f >>>= 1;
                this._pools[i].update([d, this._eventId++, 2, b, h, a.length].concat(a))
            }
            break;
        case"string":
            void 0 === b && (b = a.length), this._pools[i].update([d, this._eventId++, 3, b, h, a.length]), this._pools[i].update(a);
            break;
        default:
            k = 1
    }
    if (k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");
    this._poolEntropy[i] += b, this._poolStrength += b, j === this._NOT_READY && (this.isReady() !== this._NOT_READY && this._fireEvent("seeded", Math.max(this._strength, this._poolStrength)), this._fireEvent("progress", this.getProgress()))
}, isReady: function (a) {
    var b = this._PARANOIA_LEVELS[void 0 !== a ? a : this._defaultParanoia];
    return this._strength && this._strength >= b ? this._poolEntropy[0] > this._BITS_PER_RESEED && (new Date).valueOf() > this._nextReseed ? this._REQUIRES_RESEED | this._READY : this._READY : this._poolStrength >= b ? this._REQUIRES_RESEED | this._NOT_READY : this._NOT_READY
}, getProgress: function (a) {
    var b = this._PARANOIA_LEVELS[a ? a : this._defaultParanoia];
    return this._strength >= b ? 1 : this._poolStrength > b ? 1 : this._poolStrength / b
}, startCollectors: function () {
    if (!this._collectorsStarted) {
        if (this._eventListener = {loadTimeCollector: this._bind(this._loadTimeCollector), mouseCollector: this._bind(this._mouseCollector), keyboardCollector: this._bind(this._keyboardCollector), accelerometerCollector: this._bind(this._accelerometerCollector)}, window.addEventListener)window.addEventListener("load", this._eventListener.loadTimeCollector, !1), window.addEventListener("mousemove", this._eventListener.mouseCollector, !1), window.addEventListener("keypress", this._eventListener.keyboardCollector, !1), window.addEventListener("devicemotion", this._eventListener.accelerometerCollector, !1); else {
            if (!document.attachEvent)throw new sjcl.exception.bug("can't attach event");
            document.attachEvent("onload", this._eventListener.loadTimeCollector), document.attachEvent("onmousemove", this._eventListener.mouseCollector), document.attachEvent("keypress", this._eventListener.keyboardCollector)
        }
        this._collectorsStarted = !0
    }
}, stopCollectors: function () {
    this._collectorsStarted && (window.removeEventListener ? (window.removeEventListener("load", this._eventListener.loadTimeCollector, !1), window.removeEventListener("mousemove", this._eventListener.mouseCollector, !1), window.removeEventListener("keypress", this._eventListener.keyboardCollector, !1), window.removeEventListener("devicemotion", this._eventListener.accelerometerCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this._eventListener.loadTimeCollector), document.detachEvent("onmousemove", this._eventListener.mouseCollector), document.detachEvent("keypress", this._eventListener.keyboardCollector)), this._collectorsStarted = !1)
}, addEventListener: function (a, b) {
    this._callbacks[a][this._callbackI++] = b
}, removeEventListener: function (a, b) {
    var c, d, e = this._callbacks[a], f = [];
    for (d in e)e.hasOwnProperty(d) && e[d] === b && f.push(d);
    for (c = 0; c < f.length; c++)d = f[c], delete e[d]
}, _bind: function (a) {
    var b = this;
    return function () {
        a.apply(b, arguments)
    }
}, _gen4words: function () {
    for (var a = 0; 4 > a && (this._counter[a] = this._counter[a] + 1 | 0, !this._counter[a]); a++);
    return this._cipher.encrypt(this._counter)
}, _gate: function () {
    this._key = this._gen4words().concat(this._gen4words()), this._cipher = new sjcl.cipher.aes(this._key)
}, _reseed: function (a) {
    this._key = sjcl.hash.sha256.hash(this._key.concat(a)), this._cipher = new sjcl.cipher.aes(this._key);
    for (var b = 0; 4 > b && (this._counter[b] = this._counter[b] + 1 | 0, !this._counter[b]); b++);
}, _reseedFromPools: function (a) {
    var b, c = [], d = 0;
    for (this._nextReseed = c[0] = (new Date).valueOf() + this._MILLISECONDS_PER_RESEED, b = 0; 16 > b; b++)c.push(4294967296 * Math.random() | 0);
    for (b = 0; b < this._pools.length && (c = c.concat(this._pools[b].finalize()), d += this._poolEntropy[b], this._poolEntropy[b] = 0, a || !(this._reseedCount & 1 << b)); b++);
    this._reseedCount >= 1 << this._pools.length && (this._pools.push(new sjcl.hash.sha256), this._poolEntropy.push(0)), this._poolStrength -= d, d > this._strength && (this._strength = d), this._reseedCount++, this._reseed(c)
}, _keyboardCollector: function () {
    this._addCurrentTimeToEntropy(1)
}, _mouseCollector: function (a) {
    var b = a.x || a.clientX || a.offsetX || 0, c = a.y || a.clientY || a.offsetY || 0;
    sjcl.random.addEntropy([b, c], 2, "mouse"), this._addCurrentTimeToEntropy(0)
}, _loadTimeCollector: function () {
    this._addCurrentTimeToEntropy(2)
}, _addCurrentTimeToEntropy: function (a) {
    window && window.performance && "function" == typeof window.performance.now ? sjcl.random.addEntropy(window.performance.now(), a, "loadtime") : sjcl.random.addEntropy((new Date).valueOf(), a, "loadtime")
}, _accelerometerCollector: function (a) {
    var b = a.accelerationIncludingGravity.x || a.accelerationIncludingGravity.y || a.accelerationIncludingGravity.z, c = "";
    window.orientation && (c = window.orientation), sjcl.random.addEntropy([b, c], 3, "accelerometer"), this._addCurrentTimeToEntropy(0)
}, _fireEvent: function (a, b) {
    var c, d = sjcl.random._callbacks[a], e = [];
    for (c in d)d.hasOwnProperty(c) && e.push(d[c]);
    for (c = 0; c < e.length; c++)e[c](b)
}}, sjcl.random = new sjcl.prng(6), function () {
    try {
        var a, b, c;
        if ("undefined" != typeof module && module.exports)b = require("crypto"), a = b.randomBytes(128), sjcl.random.addEntropy(a, 1024, "crypto.randomBytes"); else if (window && Uint32Array) {
            if (c = new Uint32Array(32), window.crypto && window.crypto.getRandomValues)window.crypto.getRandomValues(c); else {
                if (!window.msCrypto || !window.msCrypto.getRandomValues)return;
                window.msCrypto.getRandomValues(c)
            }
            sjcl.random.addEntropy(c, 1024, "crypto.getRandomValues")
        }
    } catch (d) {
        console.log("There was an error collecting entropy from the browser:"), console.log(d)
    }
}(), sjcl.json = {defaults: {v: 1, iter: 1e3, ks: 128, ts: 64, mode: "ccm", adata: "", cipher: "aes"}, _encrypt: function (a, b, c, d) {
    c = c || {}, d = d || {};
    var e, f, g, h = sjcl.json, i = h._add({iv: sjcl.random.randomWords(4, 0)}, h.defaults);
    if (h._add(i, c), g = i.adata, "string" == typeof i.salt && (i.salt = sjcl.codec.base64.toBits(i.salt)), "string" == typeof i.iv && (i.iv = sjcl.codec.base64.toBits(i.iv)), !sjcl.mode[i.mode] || !sjcl.cipher[i.cipher] || "string" == typeof a && i.iter <= 100 || 64 !== i.ts && 96 !== i.ts && 128 !== i.ts || 128 !== i.ks && 192 !== i.ks && 256 !== i.ks || i.iv.length < 2 || i.iv.length > 4)throw new sjcl.exception.invalid("json encrypt: invalid parameters");
    return"string" == typeof a ? (e = sjcl.misc.cachedPbkdf2(a, i), a = e.key.slice(0, i.ks / 32), i.salt = e.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.publicKey && (e = a.kem(), i.kemtag = e.tag, a = e.key.slice(0, i.ks / 32)), "string" == typeof b && (b = sjcl.codec.utf8String.toBits(b)), "string" == typeof g && (g = sjcl.codec.utf8String.toBits(g)), f = new sjcl.cipher[i.cipher](a), h._add(d, i), d.key = a, i.ct = sjcl.mode[i.mode].encrypt(f, b, i.iv, g, i.ts), i
}, encrypt: function () {
    var a = sjcl.json, b = a._encrypt.apply(a, arguments);
    return a.encode(b)
}, _decrypt: function (a, b, c, d) {
    c = c || {}, d = d || {};
    var e, f, g, h = sjcl.json, i = h._add(h._add(h._add({}, h.defaults), b), c, !0), j = i.adata;
    if ("string" == typeof i.salt && (i.salt = sjcl.codec.base64.toBits(i.salt)), "string" == typeof i.iv && (i.iv = sjcl.codec.base64.toBits(i.iv)), !sjcl.mode[i.mode] || !sjcl.cipher[i.cipher] || "string" == typeof a && i.iter <= 100 || 64 !== i.ts && 96 !== i.ts && 128 !== i.ts || 128 !== i.ks && 192 !== i.ks && 256 !== i.ks || !i.iv || i.iv.length < 2 || i.iv.length > 4)throw new sjcl.exception.invalid("json decrypt: invalid parameters");
    return"string" == typeof a ? (f = sjcl.misc.cachedPbkdf2(a, i), a = f.key.slice(0, i.ks / 32), i.salt = f.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.secretKey && (a = a.unkem(sjcl.codec.base64.toBits(i.kemtag)).slice(0, i.ks / 32)), "string" == typeof j && (j = sjcl.codec.utf8String.toBits(j)), g = new sjcl.cipher[i.cipher](a), e = sjcl.mode[i.mode].decrypt(g, i.ct, i.iv, j, i.ts), h._add(d, i), d.key = a, sjcl.codec.utf8String.fromBits(e)
}, decrypt: function (a, b, c, d) {
    var e = sjcl.json;
    return e._decrypt(a, e.decode(b), c, d)
}, encode: function (a) {
    var b, c = "{", d = "";
    for (b in a)if (a.hasOwnProperty(b)) {
        if (!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");
        switch (c += d + '"' + b + '":', d = ",", typeof a[b]) {
            case"number":
            case"boolean":
                c += a[b];
                break;
            case"string":
                c += '"' + escape(a[b]) + '"';
                break;
            case"object":
                c += '"' + sjcl.codec.base64.fromBits(a[b], 0) + '"';
                break;
            default:
                throw new sjcl.exception.bug("json encode: unsupported type")
        }
    }
    return c + "}"
}, decode: function (a) {
    if (a = a.replace(/\s/g, ""), !a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");
    var b, c, d = a.replace(/^\{|\}$/g, "").split(/,/), e = {};
    for (b = 0; b < d.length; b++) {
        if (!(c = d[b].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
        e[c[2]] = c[3] ? parseInt(c[3], 10) : c[2].match(/^(ct|salt|iv)$/) ? sjcl.codec.base64.toBits(c[4]) : unescape(c[4])
    }
    return e
}, _add: function (a, b, c) {
    if (void 0 === a && (a = {}), void 0 === b)return a;
    var d;
    for (d in b)if (b.hasOwnProperty(d)) {
        if (c && void 0 !== a[d] && a[d] !== b[d])throw new sjcl.exception.invalid("required parameter overridden");
        a[d] = b[d]
    }
    return a
}, _subtract: function (a, b) {
    var c, d = {};
    for (c in a)a.hasOwnProperty(c) && a[c] !== b[c] && (d[c] = a[c]);
    return d
}, _filter: function (a, b) {
    var c, d = {};
    for (c = 0; c < b.length; c++)void 0 !== a[b[c]] && (d[b[c]] = a[b[c]]);
    return d
}}, sjcl.encrypt = sjcl.json.encrypt, sjcl.decrypt = sjcl.json.decrypt, sjcl.misc._pbkdf2Cache = {}, sjcl.misc.cachedPbkdf2 = function (a, b) {
    var c, d, e, f, g = sjcl.misc._pbkdf2Cache;
    return b = b || {}, f = b.iter || 1e3, d = g[a] = g[a] || {}, c = d[f] = d[f] || {firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : sjcl.random.randomWords(2, 0)}, e = void 0 === b.salt ? c.firstSalt : b.salt, c[e] = c[e] || sjcl.misc.pbkdf2(a, e, b.iter), {key: c[e].slice(0), salt: e.slice(0)}
}, function (a) {
    function b(a, b) {
        var c = .1;
        return a >= b && b * (1 + c) >= a ? b : a
    }

    var c = {ago: "Ago", from: "", now: "Just Now", minute: "Minute", minutes: "Minutes", hour: "Hour", hours: "Hours", day: "Day", days: "Days", week: "Week", weeks: "Weeks", month: "Month", months: "Months", year: "Year", years: "Years"}, d = [
        [60, c.now],
        [3600, c.minute, c.minutes, 60],
        [86400, c.hour, c.hours, 3600],
        [604800, c.day, c.days, 86400],
        [2628e3, c.week, c.weeks, 604800],
        [31536e3, c.month, c.months, 2628e3],
        [1 / 0, c.year, c.years, 31536e3]
    ];
    a.humaneDate = function (a, e) {
        if (a) {
            var f, g = "string" == typeof a, a = g ? new Date(("" + a).replace(/-/g, "/").replace(/T|(?:\.\d+)?Z/g, " ")) : a, e = e || new Date, h = (e - a + 6e4 * (e.getTimezoneOffset() - (g ? 0 : a.getTimezoneOffset()))) / 1e3;
            0 > h ? (h = Math.abs(h), f = c.from ? " " + c.from : "") : f = c.ago ? " " + c.ago : "";
            for (var i = 0, j = d[0]; d[i]; j = d[++i])if (h < j[0]) {
                if (0 === i)return j[1];
                var k = Math.ceil(b(h, j[3]) / j[3]);
                return k + " " + (1 != k ? j[2] : j[1]) + (i > 0 ? f : "")
            }
        }
    }, "undefined" != typeof jQuery && (jQuery.fn.humaneDates = function (a) {
        var b = jQuery.extend({lowercase: !1}, a);
        return this.each(function () {
            var a = jQuery(this), c = a.attr("datetime") || a.attr("title");
            c = humaneDate(c), c && b.lowercase && (c = c.toLowerCase()), c && a.html() != c && a.html(c)
        })
    })
}(this);
var Path = {version: "0.8.4", map: function (a) {
    return Path.routes.defined.hasOwnProperty(a) ? Path.routes.defined[a] : new Path.core.route(a)
}, root: function (a) {
    Path.routes.root = a
}, rescue: function (a) {
    Path.routes.rescue = a
}, history: {initial: {}, pushState: function (a, b, c) {
    Path.history.supported ? Path.dispatch(c) && history.pushState(a, b, c) : Path.history.fallback && (window.location.hash = "#" + c)
}, popState: function () {
    var a = !Path.history.initial.popped && location.href == Path.history.initial.URL;
    Path.history.initial.popped = !0, a || Path.dispatch(document.location.pathname)
}, listen: function (a) {
    if (Path.history.supported = !(!window.history || !window.history.pushState), Path.history.fallback = a, Path.history.supported)Path.history.initial.popped = "state"in window.history, Path.history.initial.URL = location.href, window.onpopstate = Path.history.popState; else if (Path.history.fallback) {
        for (route in Path.routes.defined)"#" != route.charAt(0) && (Path.routes.defined["#" + route] = Path.routes.defined[route], Path.routes.defined["#" + route].path = "#" + route);
        Path.listen()
    }
}}, match: function (a, b) {
    var c, d, e, f, g, h = {}, i = null;
    for (i in Path.routes.defined)if (null !== i && void 0 !== i)for (i = Path.routes.defined[i], c = i.partition(), f = 0; f < c.length; f++) {
        if (d = c[f], g = a, d.search(/:/) > 0)for (e = 0; e < d.split("/").length; e++)e < g.split("/").length && ":" === d.split("/")[e].charAt(0) && (h[d.split("/")[e].replace(/:/, "")] = g.split("/")[e], g = g.replace(g.split("/")[e], d.split("/")[e]));
        if (d === g)return b && (i.params = h), i
    }
    return null
}, dispatch: function (a) {
    var b, c;
    if (Path.routes.current !== a) {
        if (Path.routes.previous = Path.routes.current, Path.routes.current = a, c = Path.match(a, !0), Path.routes.previous && (b = Path.match(Path.routes.previous), null !== b && null !== b.do_exit && b.do_exit()), null !== c)return c.run(), !0;
        null !== Path.routes.rescue && Path.routes.rescue()
    }
}, listen: function () {
    var a = function () {
        Path.dispatch(location.hash)
    };
    "" === location.hash && null !== Path.routes.root && (location.hash = Path.routes.root), "onhashchange"in window && (!document.documentMode || document.documentMode >= 8) ? window.onhashchange = a : setInterval(a, 50), "" !== location.hash && Path.dispatch(location.hash)
}, core: {route: function (a) {
    this.path = a, this.action = null, this.do_enter = [], this.do_exit = null, this.params = {}, Path.routes.defined[a] = this
}}, routes: {current: null, root: null, rescue: null, previous: null, defined: {}}};

Path.core.route.prototype = {to: function (a) {
    return this.action = a, this
}, enter: function (a) {
    return a instanceof Array ? this.do_enter = this.do_enter.concat(a) : this.do_enter.push(a), this
}, exit: function (a) {
    return this.do_exit = a, this
}, partition: function () {
    for (var a, b, c = [], d = [], e = /\(([^}]+?)\)/g; a = e.exec(this.path);)c.push(a[1]);
    for (d.push(this.path.split("(")[0]), b = 0; b < c.length; b++)d.push(d[d.length - 1] + c[b]);
    return d
}, run: function () {
    var a, b, c = !1;
    if (Path.routes.defined[this.path].hasOwnProperty("do_enter") && Path.routes.defined[this.path].do_enter.length > 0)for (a = 0; a < Path.routes.defined[this.path].do_enter.length; a++)if (b = Path.routes.defined[this.path].do_enter[a](), b === !1) {
        c = !0;
        break
    }
    c || Path.routes.defined[this.path].action()
}};
var saveAs = saveAs || navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function (a) {
    var b = a.document, c = function () {
        return a.URL || a.webkitURL || a
    }, d = a.URL || a.webkitURL || a, e = b.createElementNS("http://www.w3.org/1999/xhtml", "a"), f = !a.externalHost && "download"in e, g = function (c) {
        var d = b.createEvent("MouseEvents");
        d.initMouseEvent("click", !0, !1, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(d)
    }, h = a.webkitRequestFileSystem, i = a.requestFileSystem || h || a.mozRequestFileSystem, j = function (b) {
        (a.setImmediate || a.setTimeout)(function () {
            throw b
        }, 0)
    }, k = "application/octet-stream", l = 0, m = [], n = function () {
        for (var a = m.length; a--;) {
            var b = m[a];
            "string" == typeof b ? d.revokeObjectURL(b) : b.remove()
        }
        m.length = 0
    }, o = function (a, b, c) {
        b = [].concat(b);
        for (var d = b.length; d--;) {
            var e = a["on" + b[d]];
            if ("function" == typeof e)try {
                e.call(a, c || a)
            } catch (f) {
                j(f)
            }
        }
    }, p = function (b, d) {
        var j, n, p, q = this, r = b.type, s = !1, t = function () {
            var a = c().createObjectURL(b);
            return m.push(a), a
        }, u = function () {
            o(q, "writestart progress write writeend".split(" "))
        }, v = function () {
            (s || !j) && (j = t(b)), n ? n.location.href = j : window.open(j, "_blank"), q.readyState = q.DONE, u()
        }, w = function (a) {
            return function () {
                return q.readyState !== q.DONE ? a.apply(this, arguments) : void 0
            }
        }, x = {create: !0, exclusive: !1};
        return q.readyState = q.INIT, d || (d = "download"), f ? (j = t(b), e.href = j, e.download = d, g(e), q.readyState = q.DONE, u(), void 0) : (a.chrome && r && r !== k && (p = b.slice || b.webkitSlice, b = p.call(b, 0, b.size, k), s = !0), h && "download" !== d && (d += ".download"), (r === k || h) && (n = a), i ? (l += b.size, i(a.TEMPORARY, l, w(function (a) {
            a.root.getDirectory("saved", x, w(function (a) {
                var c = function () {
                    a.getFile(d, x, w(function (a) {
                        a.createWriter(w(function (c) {
                            c.onwriteend = function (b) {
                                n.location.href = a.toURL(), m.push(a), q.readyState = q.DONE, o(q, "writeend", b)
                            }, c.onerror = function () {
                                var a = c.error;
                                a.code !== a.ABORT_ERR && v()
                            }, "writestart progress write abort".split(" ").forEach(function (a) {
                                c["on" + a] = q["on" + a]
                            }), c.write(b), q.abort = function () {
                                c.abort(), q.readyState = q.DONE
                            }, q.readyState = q.WRITING
                        }), v)
                    }), v)
                };
                a.getFile(d, {create: !1}, w(function (a) {
                    a.remove(), c()
                }), w(function (a) {
                    a.code === a.NOT_FOUND_ERR ? c() : v()
                }))
            }), v)
        }), v), void 0) : (v(), void 0))
    }, q = p.prototype, r = function (a, b) {
        return new p(a, b)
    };
    return q.abort = function () {
        var a = this;
        a.readyState = a.DONE, o(a, "abort")
    }, q.readyState = q.INIT = 0, q.WRITING = 1, q.DONE = 2, q.error = q.onwritestart = q.onprogress = q.onwrite = q.onabort = q.onerror = q.onwriteend = null, a.addEventListener("unload", n, !1), r
}(self);
"undefined" != typeof module && (module.exports = saveAs), function (a) {
    function b(a, e) {
        var f, g, j, k, n, o, s = this;
        if (!(s instanceof b))return new b(a, e);
        if (a instanceof b) {
            if (v = 0, e === f)return s.s = a.s, s.e = a.e, s.c = (a = a.c) ? a.slice() : a, void 0;
            a += ""
        }
        if ("string" != typeof a && (a = (j = "number" == typeof a || "[object Number]" == Object.prototype.toString.call(a)) && 0 === a && 0 > 1 / a ? "-0" : a + ""), o = a, e === f && w.test(a))s.s = "-" == a.charAt(0) ? (a = a.slice(1), -1) : 1; else {
            if (10 == e)return h(a, l, m);
            if (a = x.call(a).replace(/^\+(?!-)/, ""), s.s = "-" == a.charAt(0) ? (a = a.replace(/^-(?!-)/, ""), -1) : 1, null != e ? e != (0 | e) && r || (i = !(e >= 2 && 36 >= e)) ? (c(e, 2), n = w.test(a)) : (k = "[" + u.slice(0, e = 0 | e) + "]+", a = a.replace(/\.$/, "").replace(/^\./, "0."), (n = new RegExp("^" + k + "(?:\\." + k + ")?$", "i").test(a)) ? (j && (a.replace(/^0\.0*|\./, "").length > 15 && c(o, 0), j = !j), a = d(a, 10, e, s.s)) : "Infinity" != a && "NaN" != a && (c(o, 1, e), a = "NaN")) : n = w.test(a), !n)return s.c = s.e = null, "Infinity" != a && ("NaN" != a && c(o, 3), s.s = null), v = 0, void 0
        }
        for ((f = a.indexOf(".")) > -1 && (a = a.replace(".", "")), (g = a.search(/e/i)) > 0 ? (0 > f && (f = g), f += +a.slice(g + 1), a = a.substring(0, g)) : 0 > f && (f = a.length), g = 0; "0" == a.charAt(g); g++);
        if (e = a.length, j && e > 15 && a.slice(g).length > 15 && c(o, 0), v = 0, (f -= g + 1) > q)s.c = s.e = null; else if (g == e || p > f)s.c = [s.e = 0]; else {
            for (; "0" == a.charAt(--e););
            for (s.e = f, s.c = [], f = 0; e >= g; s.c[f++] = +a.charAt(g++));
        }
    }

    function c(a, b, c, d, e, f) {
        if (r) {
            var g, h = ["new BigNumber", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFr"][v ? 0 > v ? -v : v : 0 > 1 / v ? 1 : 0] + "()", j = i ? " out of range" : " not a" + (e ? " non-zero" : "n") + " integer";
            throw j = ([h + " number type has more than 15 significant digits", h + " not a base " + c + " number", h + " base" + j, h + " not a number"][b] || c + "() " + b + (f ? " not a boolean or binary digit" : j + (d ? " or not [" + (i ? " negative, positive" : " integer, integer") + " ]" : ""))) + ": " + a, i = v = 0, g = new Error(j), g.name = "BigNumber Error", g
        }
    }

    function d(a, c, d, f) {
        function g(a, b) {
            var e, f, g = 0, h = a.length, i = [0];
            for (b = b || d; h > g; g++) {
                for (f = i.length, e = 0; f > e; i[e] *= b, e++);
                for (i[0] += u.indexOf(a.charAt(g)), e = 0; e < i.length; e++)i[e] > c - 1 && (null == i[e + 1] && (i[e + 1] = 0), i[e + 1] += i[e] / c ^ 0, i[e] %= c)
            }
            return i.reverse()
        }

        function h(a) {
            for (var b = 0, c = a.length, d = ""; c > b; d += u.charAt(a[b++]));
            return d
        }

        var i, j, k, l, m, n;
        if (a = a.toLowerCase(), (i = a.indexOf(".")) > -1)if (i = a.length - i - 1, j = g(new b(d).pow(i).toF(), 10), l = a.split("."), k = g(l[1]), l = g(l[0]), n = e(k, j, k.length - j.length, f, c, 1 & l[l.length - 1]), m = n.c, i = n.e) {
            for (; ++i; m.unshift(0));
            a = h(l) + "." + h(m)
        } else m[0] ? l[i = l.length - 1] < c - 1 ? (++l[i], a = h(l)) : a = new b(h(l), c).plus(y).toS(c) : a = h(l); else a = h(g(a));
        return a
    }

    function e(a, c, d, e, f, h) {
        var i, j, k, m, n, o = c.slice(), r = i = c.length, s = a.length, t = a.slice(0, i), u = t.length, v = new b(y), w = v.c = [], x = 0, z = l + (v.e = d) + 1;
        for (v.s = e, e = 0 > z ? 0 : z; u++ < i; t.push(0));
        o.unshift(0);
        do {
            for (k = 0; f > k; k++) {
                if (i != (u = t.length))m = i > u ? 1 : -1; else for (n = -1, m = 0; ++n < i;)if (c[n] != t[n]) {
                    m = c[n] > t[n] ? 1 : -1;
                    break
                }
                if (!(0 > m))break;
                for (j = u == i ? c : o; u;) {
                    if (t[--u] < j[u]) {
                        for (n = u; n && !t[--n]; t[n] = f - 1);
                        --t[n], t[u] += f
                    }
                    t[u] -= j[u]
                }
                for (; !t[0]; t.shift());
            }
            w[x++] = m ? k : ++k, t[0] && m ? t[u] = a[r] || 0 : t = [a[r]]
        } while ((r++ < s || null != t[0]) && e--);
        return w[0] || 1 == x || (--v.e, w.shift()), x > z && g(v, l, f, h, null != t[0]), v.e > q ? v.c = v.e = null : v.e < p && (v.c = [v.e = 0]), v
    }

    function f(a, c, d) {
        var e = c - (a = new b(a)).e, f = a.c;
        if (!f)return a.toS();
        for (f.length > ++c && g(a, e, 10), e = 0 == f[0] ? e + 1 : d ? c : a.e + e + 1; f.length < e; f.push(0));
        return e = a.e, 1 == d || 2 == d && (--c < e || n >= e) ? (a.s < 0 && f[0] ? "-" : "") + (f.length > 1 ? (f.splice(1, 0, "."), f.join("")) : f[0]) + (0 > e ? "e" : "e+") + e : a.toS()
    }

    function g(a, b, c, d, e) {
        var f = a.c, g = a.s < 0, h = c / 2, i = a.e + b + 1, j = f[i], k = e || 0 > i || null != f[i + 1];
        if (e = 4 > m ? (null != j || k) && (0 == m || 2 == m && !g || 3 == m && g) : j > h || j == h && (4 == m || k || 6 == m && (1 & f[i - 1] || !b && d) || 7 == m && !g || 8 == m && g), 1 > i || !f[0])return f.length = 0, f.push(0), e ? (f[0] = 1, a.e = -b) : a.e = 0, a;
        if (f.length = i--, e)for (--c; ++f[i] > c;)f[i] = 0, i-- || (++a.e, f.unshift(1));
        for (i = f.length; !f[--i]; f.pop());
        return a
    }

    function h(a, c, d) {
        var e = m;
        return m = d, a = new b(a), a.c && g(a, c, 10), m = e, a
    }

    var i, j = 1e9, k = 1e6, l = 20, m = 4, n = -7, o = 21, p = -j, q = j, r = !0, s = parseInt, t = b.prototype, u = "0123456789abcdefghijklmnopqrstuvwxyz", v = 0, w = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, x = String.prototype.trim || function () {
        return this.replace(/^\s+|\s+$/g, "")
    }, y = b(1);
    b.ROUND_UP = 0, b.ROUND_DOWN = 1, b.ROUND_CEIL = 2, b.ROUND_FLOOR = 3, b.ROUND_HALF_UP = 4, b.ROUND_HALF_DOWN = 5, b.ROUND_HALF_EVEN = 6, b.ROUND_HALF_CEIL = 7, b.ROUND_HALF_FLOOR = 8, b.config = function () {
        var a, b, d = 0, e = {}, f = arguments, g = f[0], h = "config", k = function (a, b, c) {
            return!((i = b > a || a > c) || s(a) != a && 0 !== a)
        }, t = g && "object" == typeof g ? function () {
            return g.hasOwnProperty(b) ? null != (a = g[b]) : void 0
        } : function () {
            return f.length > d ? null != (a = f[d++]) : void 0
        };
        return t(b = "DECIMAL_PLACES") && (k(a, 0, j) ? l = 0 | a : c(a, b, h)), e[b] = l, t(b = "ROUNDING_MODE") && (k(a, 0, 8) ? m = 0 | a : c(a, b, h)), e[b] = m, t(b = "EXPONENTIAL_AT") && (k(a, -j, j) ? n = -(o = ~~(0 > a ? -a : +a)) : !i && a && k(a[0], -j, 0) && k(a[1], 0, j) ? (n = ~~a[0], o = ~~a[1]) : c(a, b, h, 1)), e[b] = [n, o], t(b = "RANGE") && (k(a, -j, j) && ~~a ? p = -(q = ~~(0 > a ? -a : +a)) : !i && a && k(a[0], -j, -1) && k(a[1], 1, j) ? (p = ~~a[0], q = ~~a[1]) : c(a, b, h, 1, 1)), e[b] = [p, q], t(b = "ERRORS") && (a === !!a || 1 === a || 0 === a ? (i = v = 0, s = (r = !!a) ? parseInt : parseFloat) : c(a, b, h, 0, 0, 1)), e[b] = r, e
    }, t.abs = t.absoluteValue = function () {
        var a = new b(this);
        return a.s < 0 && (a.s = 1), a
    }, t.ceil = function () {
        return h(this, 0, 2)
    }, t.comparedTo = t.cmp = function (a, c) {
        var d, e = this, f = e.c, g = (v = -v, a = new b(a, c)).c, h = e.s, i = a.s, j = e.e, k = a.e;
        if (!h || !i)return null;
        if (d = f && !f[0], c = g && !g[0], d || c)return d ? c ? 0 : -i : h;
        if (h != i)return h;
        if (d = 0 > h, c = j == k, !f || !g)return c ? 0 : !f ^ d ? 1 : -1;
        if (!c)return j > k ^ d ? 1 : -1;
        for (h = -1, i = (j = f.length) < (k = g.length) ? j : k; ++h < i;)if (f[h] != g[h])return f[h] > g[h] ^ d ? 1 : -1;
        return j == k ? 0 : j > k ^ d ? 1 : -1
    }, t.dividedBy = t.div = function (a, c) {
        var d = this.c, f = this.e, g = this.s, h = (v = 2, a = new b(a, c)).c, i = a.e, j = a.s, k = g == j ? 1 : -1;
        return(f || d && d[0]) && (i || h && h[0]) ? e(d, h, f - i, k, 10) : new b(g && j && (d ? !h || d[0] != h[0] : h) ? d && 0 == d[0] || !h ? 0 * k : k / 0 : 0 / 0)
    }, t.equals = t.eq = function (a, b) {
        return v = 3, 0 === this.cmp(a, b)
    }, t.floor = function () {
        return h(this, 0, 3)
    }, t.greaterThan = t.gt = function (a, b) {
        return v = 4, this.cmp(a, b) > 0
    }, t.greaterThanOrEqualTo = t.gte = function (a, b) {
        return v = 5, 1 == (b = this.cmp(a, b)) || 0 === b
    }, t.isFinite = t.isF = function () {
        return!!this.c
    }, t.isNaN = function () {
        return!this.s
    }, t.isNegative = t.isNeg = function () {
        return this.s < 0
    }, t.isZero = t.isZ = function () {
        return!!this.c && 0 == this.c[0]
    }, t.lessThan = t.lt = function (a, b) {
        return v = 6, this.cmp(a, b) < 0
    }, t.lessThanOrEqualTo = t.lte = function (a, b) {
        return v = 7, -1 == (b = this.cmp(a, b)) || 0 === b
    }, t.minus = function (a, c) {
        var d, e, f, g, h = this, i = h.s;
        if (c = (v = 8, a = new b(a, c)).s, !i || !c)return new b(0 / 0);
        if (i != c)return a.s = -c, h.plus(a);
        var j = h.c, k = h.e, l = a.c, m = a.e;
        if (!k || !m) {
            if (!j || !l)return j ? (a.s = -c, a) : new b(l ? h : 0 / 0);
            if (!j[0] || !l[0])return l[0] ? (a.s = -c, a) : new b(j[0] ? h : 0)
        }
        if (j = j.slice(), i = k - m) {
            for (d = (g = 0 > i) ? (i = -i, j) : (m = k, l), d.reverse(), c = i; c--; d.push(0));
            d.reverse()
        } else for (f = ((g = j.length < l.length) ? j : l).length, i = c = 0; f > c; c++)if (j[c] != l[c]) {
            g = j[c] < l[c];
            break
        }
        if (g && (d = j, j = l, l = d, a.s = -a.s), (c = -((f = j.length) - l.length)) > 0)for (; c--; j[f++] = 0);
        for (c = l.length; c > i;) {
            if (j[--c] < l[c]) {
                for (e = c; e && !j[--e]; j[e] = 9);
                --j[e], j[c] += 10
            }
            j[c] -= l[c]
        }
        for (; 0 == j[--f]; j.pop());
        for (; 0 == j[0]; j.shift(), --m);
        return(p > m || !j[0]) && (j = [m = 0]), a.c = j, a.e = m, a
    }, t.modulo = t.mod = function (a, c) {
        var d = this, e = d.c, f = (v = 9, a = new b(a, c)).c, g = d.s, h = a.s;
        return c = !g || !h || f && !f[0], c || e && !e[0] ? new b(c ? 0 / 0 : d) : (d.s = a.s = 1, c = 1 == a.cmp(d), d.s = g, a.s = h, c ? new b(d) : (g = l, h = m, l = 0, m = 1, d = d.div(a), l = g, m = h, this.minus(d.times(a))))
    }, t.negated = t.neg = function () {
        var a = new b(this);
        return a.s = -a.s || null, a
    }, t.plus = function (a, c) {
        var d, e = this, f = e.s;
        if (c = (v = 10, a = new b(a, c)).s, !f || !c)return new b(0 / 0);
        if (f != c)return a.s = -c, e.minus(a);
        var g = e.e, h = e.c, i = a.e, j = a.c;
        if (!g || !i) {
            if (!h || !j)return new b(f / 0);
            if (!h[0] || !j[0])return j[0] ? a : new b(h[0] ? e : 0 * f)
        }
        if (h = h.slice(), f = g - i) {
            for (d = f > 0 ? (i = g, j) : (f = -f, h), d.reverse(); f--; d.push(0));
            d.reverse()
        }
        for (h.length - j.length < 0 && (d = j, j = h, h = d), f = j.length, c = 0; f; c = (h[--f] = h[f] + j[f] + c) / 10 ^ 0, h[f] %= 10);
        for (c && (h.unshift(c), ++i > q && (h = i = null)), f = h.length; 0 == h[--f]; h.pop());
        return a.c = h, a.e = i, a
    }, t.toPower = t.pow = function (a) {
        var d = 0 * a == 0 ? 0 | a : a, e = new b(this), f = new b(y);
        if (((i = -k > a || a > k) && (d = 1 * a / 0) || s(a) != a && 0 !== a && !(d = 0 / 0)) && !c(a, "exponent", "pow") || !d)return new b(Math.pow(e.toS(), d));
        for (d = 0 > d ? -d : d; 1 & d && (f = f.times(e)), d >>= 1, d;)e = e.times(e);
        return 0 > a ? y.div(f) : f
    }, t.round = function (a, b) {
        return a = null == a || ((i = 0 > a || a > j) || s(a) != a) && !c(a, "decimal places", "round") ? 0 : 0 | a, b = null == b || ((i = 0 > b || b > 8) || s(b) != b && 0 !== b) && !c(b, "mode", "round") ? m : 0 | b, h(this, a, b)
    }, t.squareRoot = t.sqrt = function () {
        var a, c, d, e = this, f = e.c, h = e.s, i = e.e, j = new b("0.5");
        if (1 !== h || !f || !f[0])return new b(!h || 0 > h && (!f || f[0]) ? 0 / 0 : f ? e : 1 / 0);
        h = Math.sqrt(e.toS()), 0 == h || h == 1 / 0 ? (a = f.join(""), a.length + i & 1 || (a += "0"), c = new b(Math.sqrt(a).toString()), c.e = ((i + 1) / 2 | 0) - (0 > i || 1 & i)) : c = new b(h.toString()), h = c.e + (l += 4);
        do d = c, c = j.times(d.plus(e.div(d))); while (d.c.slice(0, h).join("") !== c.c.slice(0, h).join(""));
        return g(c, l -= 4, 10), c
    }, t.times = function (a, c) {
        var d, e = this, f = e.c, g = (v = 11, a = new b(a, c)).c, h = e.e, i = a.e, j = e.s;
        if (a.s = j == (c = a.s) ? 1 : -1, !((h || f && f[0]) && (i || g && g[0])))return new b(!j || !c || f && !f[0] && !g || g && !g[0] && !f ? 0 / 0 : f && g ? 0 * a.s : a.s / 0);
        for (a.e = h + i, (j = f.length) < (c = g.length) && (d = f, f = g, g = d, i = j, j = c, c = i), i = j + c, d = []; i--; d.push(0));
        for (h = c - 1; h > -1; h--) {
            for (c = 0, i = j + h; i > h; c = d[i] + g[h] * f[i - h - 1] + c, d[i--] = c % 10 | 0, c = c / 10 | 0);
            c && (d[i] = (d[i] + c) % 10)
        }
        for (c && ++a.e, !d[0] && d.shift(), i = d.length; !d[--i]; d.pop());
        return a.c = a.e > q ? a.e = null : a.e < p ? [a.e = 0] : d, a
    }, t.toExponential = t.toE = function (a) {
        return f(this, (null == a || ((i = 0 > a || a > j) || s(a) != a && 0 !== a) && !c(a, "decimal places", "toE")) && this.c ? this.c.length - 1 : 0 | a, 1)
    }, t.toFixed = t.toF = function (a) {
        var b, d, e, g = this;
        return null == a || ((i = 0 > a || a > j) || s(a) != a && 0 !== a) && !c(a, "decimal places", "toF") || (e = g.e + (0 | a)), b = n, a = o, n = -(o = 1 / 0), e == d ? d = g.toS() : (d = f(g, e), g.s < 0 && g.c && (g.c[0] ? d.indexOf("-") < 0 && (d = "-" + d) : d = d.replace(/^-/, ""))), n = b, o = a, d
    }, t.toFraction = t.toFr = function (a) {
        var d, e, f, g, h, j, k, n = g = new b(y), o = f = new b("0"), p = this, s = p.c, t = q, u = l, w = m, x = new b(y);
        if (!s)return p.toS();
        for (k = x.e = s.length - p.e - 1, (null == a || (!(v = 12, j = new b(a)).s || (i = j.cmp(n) < 0 || !j.c) || r && j.e < j.c.length - 1) && !c(a, "max denominator", "toFr") || (a = j).cmp(x) > 0) && (a = k > 0 ? x : n), q = 1 / 0, j = new b(s.join("")), l = 0, m = 1; d = j.div(x), h = g.plus(d.times(o)), 1 != h.cmp(a);)g = o, o = h, n = f.plus(d.times(h = n)), f = h, x = j.minus(d.times(h = x)), j = h;
        return h = a.minus(g).div(o), f = f.plus(h.times(n)), g = g.plus(h.times(o)), f.s = n.s = p.s, l = 2 * k, m = w, e = n.div(o).minus(p).abs().cmp(f.div(g).minus(p).abs()) < 1 ? [n.toS(), o.toS()] : [f.toS(), g.toS()], q = t, l = u, e
    }, t.toPrecision = t.toP = function (a) {
        return null == a || ((i = 1 > a || a > j) || s(a) != a) && !c(a, "precision", "toP") ? this.toS() : f(this, 0 | --a, 2)
    }, t.toString = t.toS = function (a) {
        var b, e, g, h = this, j = h.e;
        if (null === j)e = h.s ? "Infinity" : "NaN"; else {
            if (a === b && (n >= j || j >= o))return f(h, h.c.length - 1, 1);
            if (e = h.c.join(""), 0 > j) {
                for (; ++j; e = "0" + e);
                e = "0." + e
            } else if (g = e.length, j > 0)if (++j > g)for (j -= g; j--; e += "0"); else g > j && (e = e.slice(0, j) + "." + e.slice(j)); else if (b = e.charAt(0), g > 1)e = b + "." + e.slice(1); else if ("0" == b)return b;
            if (null != a)if ((i = !(a >= 2 && 36 >= a)) || a != (0 | a) && r)c(a, "base", "toS"); else if (e = d(e, 0 | a, 10, h.s), "0" == e)return e
        }
        return h.s < 0 ? "-" + e : e
    }, t.valueOf = function () {
        return this.toS()
    }, "undefined" != typeof module && module.exports ? module.exports = b : "function" == typeof define && define.amd ? define(function () {
        return b
    }) : a.BigNumber = b
}(this);
var SockJS = function () {
    var a = document, b = window, c = {}, d = function () {
    };
    d.prototype.addEventListener = function (a, b) {
        this._listeners || (this._listeners = {}), a in this._listeners || (this._listeners[a] = []);
        var d = this._listeners[a];
        -1 === c.arrIndexOf(d, b) && d.push(b)
    }, d.prototype.removeEventListener = function (a, b) {
        if (this._listeners && a in this._listeners) {
            var d = this._listeners[a], e = c.arrIndexOf(d, b);
            return-1 !== e ? (d.length > 1 ? this._listeners[a] = d.slice(0, e).concat(d.slice(e + 1)) : delete this._listeners[a], void 0) : void 0
        }
    }, d.prototype.dispatchEvent = function (a) {
        var b = a.type, c = Array.prototype.slice.call(arguments, 0);
        if (this["on" + b] && this["on" + b].apply(this, c), this._listeners && b in this._listeners)for (var d = 0; d < this._listeners[b].length; d++)this._listeners[b][d].apply(this, c)
    };
    var e = function (a, b) {
        if (this.type = a, "undefined" != typeof b)for (var c in b)b.hasOwnProperty(c) && (this[c] = b[c])
    };
    e.prototype.toString = function () {
        var a = [];
        for (var b in this)if (this.hasOwnProperty(b)) {
            var c = this[b];
            "function" == typeof c && (c = "[function]"), a.push(b + "=" + c)
        }
        return"SimpleEvent(" + a.join(", ") + ")"
    };
    var f = function (a) {
        var b = this;
        b._events = a || [], b._listeners = {}
    };
    f.prototype.emit = function (a) {
        var b = this;
        if (b._verifyType(a), !b._nuked) {
            var c = Array.prototype.slice.call(arguments, 1);
            if (b["on" + a] && b["on" + a].apply(b, c), a in b._listeners)for (var d = 0; d < b._listeners[a].length; d++)b._listeners[a][d].apply(b, c)
        }
    }, f.prototype.on = function (a, b) {
        var c = this;
        c._verifyType(a), c._nuked || (a in c._listeners || (c._listeners[a] = []), c._listeners[a].push(b))
    }, f.prototype._verifyType = function (a) {
        var b = this;
        -1 === c.arrIndexOf(b._events, a) && c.log("Event " + JSON.stringify(a) + " not listed " + JSON.stringify(b._events) + " in " + b)
    }, f.prototype.nuke = function () {
        var a = this;
        a._nuked = !0;
        for (var b = 0; b < a._events.length; b++)delete a[a._events[b]];
        a._listeners = {}
    };
    var g = "abcdefghijklmnopqrstuvwxyz0123456789_";
    c.random_string = function (a, b) {
        b = b || g.length;
        var c, d = [];
        for (c = 0; a > c; c++)d.push(g.substr(Math.floor(Math.random() * b), 1));
        return d.join("")
    }, c.random_number = function (a) {
        return Math.floor(Math.random() * a)
    }, c.random_number_string = function (a) {
        var b = ("" + (a - 1)).length, d = Array(b + 1).join("0");
        return(d + c.random_number(a)).slice(-b)
    }, c.getOrigin = function (a) {
        a += "/";
        var b = a.split("/").slice(0, 3);
        return b.join("/")
    }, c.isSameOriginUrl = function (a, c) {
        return c || (c = b.location.href), a.split("/").slice(0, 3).join("/") === c.split("/").slice(0, 3).join("/")
    }, c.getParentDomain = function (a) {
        if (/^[0-9.]*$/.test(a))return a;
        if (/^\[/.test(a))return a;
        if (!/[.]/.test(a))return a;
        var b = a.split(".").slice(1);
        return b.join(".")
    }, c.objectExtend = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    var h = "_jp";
    c.polluteGlobalNamespace = function () {
        h in b || (b[h] = {})
    }, c.closeFrame = function (a, b) {
        return"c" + JSON.stringify([a, b])
    }, c.userSetCode = function (a) {
        return 1e3 === a || a >= 3e3 && 4999 >= a
    }, c.countRTO = function (a) {
        var b;
        return b = a > 100 ? 3 * a : a + 200
    }, c.log = function () {
        b.console && console.log && console.log.apply && console.log.apply(console, arguments)
    }, c.bind = function (a, b) {
        return a.bind ? a.bind(b) : function () {
            return a.apply(b, arguments)
        }
    }, c.flatUrl = function (a) {
        return-1 === a.indexOf("?") && -1 === a.indexOf("#")
    }, c.amendUrl = function (b) {
        var d = a.location;
        if (!b)throw new Error("Wrong url for SockJS");
        if (!c.flatUrl(b))throw new Error("Only basic urls are supported in SockJS");
        return 0 === b.indexOf("//") && (b = d.protocol + b), 0 === b.indexOf("/") && (b = d.protocol + "//" + d.host + b), b = b.replace(/[/]+$/, "")
    }, c.arrIndexOf = function (a, b) {
        for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
        return-1
    }, c.arrSkip = function (a, b) {
        var d = c.arrIndexOf(a, b);
        if (-1 === d)return a.slice();
        var e = a.slice(0, d);
        return e.concat(a.slice(d + 1))
    }, c.isArray = Array.isArray || function (a) {
        return{}.toString.call(a).indexOf("Array") >= 0
    }, c.delay = function (a, b) {
        return"function" == typeof a && (b = a, a = 0), setTimeout(b, a)
    };
    var i, j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, k = {"\x00": "\\u0000", "": "\\u0001", "": "\\u0002", "": "\\u0003", "": "\\u0004", "": "\\u0005", "": "\\u0006", "": "\\u0007", "\b": "\\b", "	": "\\t", "\n": "\\n", "": "\\u000b", "\f": "\\f", "\r": "\\r", "": "\\u000e", "": "\\u000f", "": "\\u0010", "": "\\u0011", "": "\\u0012", "": "\\u0013", "": "\\u0014", "": "\\u0015", "": "\\u0016", "": "\\u0017", "": "\\u0018", "": "\\u0019", "": "\\u001a", "": "\\u001b", "": "\\u001c", "": "\\u001d", "": "\\u001e", "": "\\u001f", '"': '\\"', "\\": "\\\\", "": "\\u007f", "": "\\u0080", "": "\\u0081", "": "\\u0082", "": "\\u0083", "": "\\u0084", "": "\\u0085", "": "\\u0086", "": "\\u0087", "": "\\u0088", "": "\\u0089", "": "\\u008a", "": "\\u008b", "": "\\u008c", "": "\\u008d", "": "\\u008e", "": "\\u008f", "": "\\u0090", "": "\\u0091", "": "\\u0092", "": "\\u0093", "": "\\u0094", "": "\\u0095", "": "\\u0096", "": "\\u0097", "": "\\u0098", "": "\\u0099", "": "\\u009a", "": "\\u009b", "": "\\u009c", "": "\\u009d", "": "\\u009e", "": "\\u009f", "­": "\\u00ad", "؀": "\\u0600", "؁": "\\u0601", "؂": "\\u0602", "؃": "\\u0603", "؄": "\\u0604", "܏": "\\u070f", "឴": "\\u17b4", "឵": "\\u17b5", "‌": "\\u200c", "‍": "\\u200d", "‎": "\\u200e", "‏": "\\u200f", "\u2028": "\\u2028", "\u2029": "\\u2029", "‪": "\\u202a", "‫": "\\u202b", "‬": "\\u202c", "‭": "\\u202d", "‮": "\\u202e", " ": "\\u202f", "⁠": "\\u2060", "⁡": "\\u2061", "⁢": "\\u2062", "⁣": "\\u2063", "⁤": "\\u2064", "⁥": "\\u2065", "⁦": "\\u2066", "⁧": "\\u2067", "⁨": "\\u2068", "⁩": "\\u2069", "⁪": "\\u206a", "⁫": "\\u206b", "⁬": "\\u206c", "⁭": "\\u206d", "⁮": "\\u206e", "⁯": "\\u206f", "﻿": "\\ufeff", "￰": "\\ufff0", "￱": "\\ufff1", "￲": "\\ufff2", "￳": "\\ufff3", "￴": "\\ufff4", "￵": "\\ufff5", "￶": "\\ufff6", "￷": "\\ufff7", "￸": "\\ufff8", "￹": "\\ufff9", "￺": "\\ufffa", "￻": "\\ufffb", "￼": "\\ufffc", "�": "\\ufffd", "￾": "\\ufffe", "￿": "\\uffff"}, l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, m = JSON && JSON.stringify || function (a) {
        return j.lastIndex = 0, j.test(a) && (a = a.replace(j, function (a) {
            return k[a]
        })), '"' + a + '"'
    }, n = function (a) {
        var b, c = {}, d = [];
        for (b = 0; 65536 > b; b++)d.push(String.fromCharCode(b));
        return a.lastIndex = 0, d.join("").replace(a, function (a) {
            return c[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
        }), a.lastIndex = 0, c
    };
    c.quote = function (a) {
        var b = m(a);
        return l.lastIndex = 0, l.test(b) ? (i || (i = n(l)), b.replace(l, function (a) {
            return i[a]
        })) : b
    };
    var o = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
    c.probeProtocols = function () {
        for (var a = {}, b = 0; b < o.length; b++) {
            var c = o[b];
            a[c] = y[c] && y[c].enabled()
        }
        return a
    }, c.detectProtocols = function (a, b, c) {
        var d = {}, e = [];
        b || (b = o);
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            d[g] = a[g]
        }
        var h = function (a) {
            var b = a.shift();
            d[b] ? e.push(b) : a.length > 0 && h(a)
        };
        return c.websocket !== !1 && h(["websocket"]), d["xhr-streaming"] && !c.null_origin ? e.push("xhr-streaming") : !d["xdr-streaming"] || c.cookie_needed || c.null_origin ? h(["iframe-eventsource", "iframe-htmlfile"]) : e.push("xdr-streaming"), d["xhr-polling"] && !c.null_origin ? e.push("xhr-polling") : !d["xdr-polling"] || c.cookie_needed || c.null_origin ? h(["iframe-xhr-polling", "jsonp-polling"]) : e.push("xdr-polling"), e
    };
    var p = "_sockjs_global";
    c.createHook = function () {
        var a = "a" + c.random_string(8);
        if (!(p in b)) {
            var d = {};
            b[p] = function (a) {
                return a in d || (d[a] = {id: a, del: function () {
                    delete d[a]
                }}), d[a]
            }
        }
        return b[p](a)
    }, c.attachMessage = function (a) {
        c.attachEvent("message", a)
    }, c.attachEvent = function (c, d) {
        "undefined" != typeof b.addEventListener ? b.addEventListener(c, d, !1) : (a.attachEvent("on" + c, d), b.attachEvent("on" + c, d))
    }, c.detachMessage = function (a) {
        c.detachEvent("message", a)
    }, c.detachEvent = function (c, d) {
        "undefined" != typeof b.addEventListener ? b.removeEventListener(c, d, !1) : (a.detachEvent("on" + c, d), b.detachEvent("on" + c, d))
    };
    var q = {}, r = !1, s = function () {
        for (var a in q)q[a](), delete q[a]
    }, t = function () {
        r || (r = !0, s())
    };
    c.attachEvent("unload", t), c.unload_add = function (a) {
        var b = c.random_string(8);
        return q[b] = a, r && c.delay(s), b
    }, c.unload_del = function (a) {
        a in q && delete q[a]
    }, c.createIframe = function (b, d) {
        var e, f, g = a.createElement("iframe"), h = function () {
            clearTimeout(e);
            try {
                g.onload = null
            } catch (a) {
            }
            g.onerror = null
        }, i = function () {
            g && (h(), setTimeout(function () {
                g && g.parentNode.removeChild(g), g = null
            }, 0), c.unload_del(f))
        }, j = function (a) {
            g && (i(), d(a))
        }, k = function (a, b) {
            try {
                g && g.contentWindow && g.contentWindow.postMessage(a, b)
            } catch (c) {
            }
        };
        return g.src = b, g.style.display = "none", g.style.position = "absolute", g.onerror = function () {
            j("onerror")
        }, g.onload = function () {
            clearTimeout(e), e = setTimeout(function () {
                j("onload timeout")
            }, 2e3)
        }, a.body.appendChild(g), e = setTimeout(function () {
            j("timeout")
        }, 15e3), f = c.unload_add(i), {post: k, cleanup: i, loaded: h}
    }, c.createHtmlfile = function (a, d) {
        var e, f, g, i = new ActiveXObject("htmlfile"), j = function () {
            clearTimeout(e)
        }, k = function () {
            i && (j(), c.unload_del(f), g.parentNode.removeChild(g), g = i = null, CollectGarbage())
        }, l = function (a) {
            i && (k(), d(a))
        }, m = function (a, b) {
            try {
                g && g.contentWindow && g.contentWindow.postMessage(a, b)
            } catch (c) {
            }
        };
        i.open(), i.write('<html><script>document.domain="' + document.domain + '";</script></html>'), i.close(), i.parentWindow[h] = b[h];
        var n = i.createElement("div");
        return i.body.appendChild(n), g = i.createElement("iframe"), n.appendChild(g), g.src = a, e = setTimeout(function () {
            l("timeout")
        }, 15e3), f = c.unload_add(k), {post: m, cleanup: k, loaded: j}
    };
    var u = function () {
    };
    u.prototype = new f(["chunk", "finish"]), u.prototype._start = function (a, d, e, f) {
        var g = this;
        try {
            g.xhr = new XMLHttpRequest
        } catch (h) {
        }
        if (!g.xhr)try {
            g.xhr = new b.ActiveXObject("Microsoft.XMLHTTP")
        } catch (h) {
        }
        (b.ActiveXObject || b.XDomainRequest) && (d += (-1 === d.indexOf("?") ? "?" : "&") + "t=" + +new Date), g.unload_ref = c.unload_add(function () {
            g._cleanup(!0)
        });
        try {
            g.xhr.open(a, d, !0)
        } catch (i) {
            return g.emit("finish", 0, ""), g._cleanup(), void 0
        }
        if (f && f.no_credentials || (g.xhr.withCredentials = "true"), f && f.headers)for (var j in f.headers)g.xhr.setRequestHeader(j, f.headers[j]);
        g.xhr.onreadystatechange = function () {
            if (g.xhr) {
                var a = g.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status, c = a.responseText
                        } catch (a) {
                        }
                        1223 === b && (b = 204), c && c.length > 0 && g.emit("chunk", b, c);
                        break;
                    case 4:
                        var b = a.status;
                        1223 === b && (b = 204), g.emit("finish", b, a.responseText), g._cleanup(!1)
                }
            }
        }, g.xhr.send(e)
    }, u.prototype._cleanup = function (a) {
        var b = this;
        if (b.xhr) {
            if (c.unload_del(b.unload_ref), b.xhr.onreadystatechange = function () {
            }, a)try {
                b.xhr.abort()
            } catch (d) {
            }
            b.unload_ref = b.xhr = null
        }
    }, u.prototype.close = function () {
        var a = this;
        a.nuke(), a._cleanup(!0)
    };
    var v = c.XHRCorsObject = function () {
        var a = this, b = arguments;
        c.delay(function () {
            a._start.apply(a, b)
        })
    };
    v.prototype = new u;
    var w = c.XHRLocalObject = function (a, b, d) {
        var e = this;
        c.delay(function () {
            e._start(a, b, d, {no_credentials: !0})
        })
    };
    w.prototype = new u;
    var x = c.XDRObject = function (a, b, d) {
        var e = this;
        c.delay(function () {
            e._start(a, b, d)
        })
    };
    x.prototype = new f(["chunk", "finish"]), x.prototype._start = function (a, b, d) {
        var e = this, f = new XDomainRequest;
        b += (-1 === b.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var g = f.ontimeout = f.onerror = function () {
            e.emit("finish", 0, ""), e._cleanup(!1)
        };
        f.onprogress = function () {
            e.emit("chunk", 200, f.responseText)
        }, f.onload = function () {
            e.emit("finish", 200, f.responseText), e._cleanup(!1)
        }, e.xdr = f, e.unload_ref = c.unload_add(function () {
            e._cleanup(!0)
        });
        try {
            e.xdr.open(a, b), e.xdr.send(d)
        } catch (h) {
            g()
        }
    }, x.prototype._cleanup = function (a) {
        var b = this;
        if (b.xdr) {
            if (c.unload_del(b.unload_ref), b.xdr.ontimeout = b.xdr.onerror = b.xdr.onprogress = b.xdr.onload = null, a)try {
                b.xdr.abort()
            } catch (d) {
            }
            b.unload_ref = b.xdr = null
        }
    }, x.prototype.close = function () {
        var a = this;
        a.nuke(), a._cleanup(!0)
    }, c.isXHRCorsCapable = function () {
        return b.XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? 1 : b.XDomainRequest && a.domain ? 2 : L.enabled() ? 3 : 4
    };
    var y = function (a, d, e) {
        if (this === b)return new y(a, d, e);
        var f, g = this;
        g._options = {devel: !1, debug: !1, protocols_whitelist: [], info: void 0, rtt: void 0}, e && c.objectExtend(g._options, e), g._base_url = c.amendUrl(a), g._server = g._options.server || c.random_number_string(1e3), g._options.protocols_whitelist && g._options.protocols_whitelist.length ? f = g._options.protocols_whitelist : (f = "string" == typeof d && d.length > 0 ? [d] : c.isArray(d) ? d : null, f && g._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), g._protocols = [], g.protocol = null, g.readyState = y.CONNECTING, g._ir = S(g._base_url), g._ir.onfinish = function (a, b) {
            g._ir = null, a ? (g._options.info && (a = c.objectExtend(a, g._options.info)), g._options.rtt && (b = g._options.rtt), g._applyInfo(a, b, f), g._didClose()) : g._didClose(1002, "Can't connect to server", !0)
        }
    };
    y.prototype = new d, y.version = "0.3.4", y.CONNECTING = 0, y.OPEN = 1, y.CLOSING = 2, y.CLOSED = 3, y.prototype._debug = function () {
        this._options.debug && c.log.apply(c, arguments)
    }, y.prototype._dispatchOpen = function () {
        var a = this;
        a.readyState === y.CONNECTING ? (a._transport_tref && (clearTimeout(a._transport_tref), a._transport_tref = null), a.readyState = y.OPEN, a.dispatchEvent(new e("open"))) : a._didClose(1006, "Server lost session")
    }, y.prototype._dispatchMessage = function (a) {
        var b = this;
        b.readyState === y.OPEN && b.dispatchEvent(new e("message", {data: a}))
    }, y.prototype._dispatchHeartbeat = function () {
        var a = this;
        a.readyState === y.OPEN && a.dispatchEvent(new e("heartbeat", {}))
    }, y.prototype._didClose = function (a, b, d) {
        var f = this;
        if (f.readyState !== y.CONNECTING && f.readyState !== y.OPEN && f.readyState !== y.CLOSING)throw new Error("INVALID_STATE_ERR");
        f._ir && (f._ir.nuke(), f._ir = null), f._transport && (f._transport.doCleanup(), f._transport = null);
        var g = new e("close", {code: a, reason: b, wasClean: c.userSetCode(a)});
        if (!c.userSetCode(a) && f.readyState === y.CONNECTING && !d) {
            if (f._try_next_protocol(g))return;
            g = new e("close", {code: 2e3, reason: "All transports failed", wasClean: !1, last_event: g})
        }
        f.readyState = y.CLOSED, c.delay(function () {
            f.dispatchEvent(g)
        })
    }, y.prototype._didMessage = function (a) {
        var b = this, c = a.slice(0, 1);
        switch (c) {
            case"o":
                b._dispatchOpen();
                break;
            case"a":
                for (var d = JSON.parse(a.slice(1) || "[]"), e = 0; e < d.length; e++)b._dispatchMessage(d[e]);
                break;
            case"m":
                var d = JSON.parse(a.slice(1) || "null");
                b._dispatchMessage(d);
                break;
            case"c":
                var d = JSON.parse(a.slice(1) || "[]");
                b._didClose(d[0], d[1]);
                break;
            case"h":
                b._dispatchHeartbeat()
        }
    }, y.prototype._try_next_protocol = function (b) {
        var d = this;
        for (d.protocol && (d._debug("Closed transport:", d.protocol, "" + b), d.protocol = null), d._transport_tref && (clearTimeout(d._transport_tref), d._transport_tref = null); ;) {
            var e = d.protocol = d._protocols.shift();
            if (!e)return!1;
            if (y[e] && y[e].need_body === !0 && (!a.body || "undefined" != typeof a.readyState && "complete" !== a.readyState))return d._protocols.unshift(e), d.protocol = "waiting-for-load", c.attachEvent("load", function () {
                d._try_next_protocol()
            }), !0;
            if (y[e] && y[e].enabled(d._options)) {
                var f = y[e].roundTrips || 1, g = (d._options.rto || 0) * f || 5e3;
                d._transport_tref = c.delay(g, function () {
                    d.readyState === y.CONNECTING && d._didClose(2007, "Transport timeouted")
                });
                var h = c.random_string(8), i = d._base_url + "/" + d._server + "/" + h;
                return d._debug("Opening transport:", e, " url:" + i, " RTO:" + d._options.rto), d._transport = new y[e](d, i, d._base_url), !0
            }
            d._debug("Skipping transport:", e)
        }
    }, y.prototype.close = function (a, b) {
        var d = this;
        if (a && !c.userSetCode(a))throw new Error("INVALID_ACCESS_ERR");
        return d.readyState !== y.CONNECTING && d.readyState !== y.OPEN ? !1 : (d.readyState = y.CLOSING, d._didClose(a || 1e3, b || "Normal closure"), !0)
    }, y.prototype.send = function (a) {
        var b = this;
        if (b.readyState === y.CONNECTING)throw new Error("INVALID_STATE_ERR");
        return b.readyState === y.OPEN && b._transport.doSend(c.quote("" + a)), !0
    }, y.prototype._applyInfo = function (b, d, e) {
        var f = this;
        f._options.info = b, f._options.rtt = d, f._options.rto = c.countRTO(d), f._options.info.null_origin = !a.domain;
        var g = c.probeProtocols();
        f._protocols = c.detectProtocols(g, e, b)
    };
    var z = y.websocket = function (a, d) {
        var e = this, f = d + "/websocket";
        f = "https" === f.slice(0, 5) ? "wss" + f.slice(5) : "ws" + f.slice(4), e.ri = a, e.url = f;
        var g = b.WebSocket || b.MozWebSocket;
        e.ws = new g(e.url), e.ws.onmessage = function (a) {
            e.ri._didMessage(a.data)
        }, e.unload_ref = c.unload_add(function () {
            e.ws.close()
        }), e.ws.onclose = function () {
            e.ri._didMessage(c.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    z.prototype.doSend = function (a) {
        this.ws.send("[" + a + "]")
    }, z.prototype.doCleanup = function () {
        var a = this, b = a.ws;
        b && (b.onmessage = b.onclose = null, b.close(), c.unload_del(a.unload_ref), a.unload_ref = a.ri = a.ws = null)
    }, z.enabled = function () {
        return!(!b.WebSocket && !b.MozWebSocket)
    }, z.roundTrips = 2;
    var A = function () {
    };
    A.prototype.send_constructor = function (a) {
        var b = this;
        b.send_buffer = [], b.sender = a
    }, A.prototype.doSend = function (a) {
        var b = this;
        b.send_buffer.push(a), b.send_stop || b.send_schedule()
    }, A.prototype.send_schedule_wait = function () {
        var a, b = this;
        b.send_stop = function () {
            b.send_stop = null, clearTimeout(a)
        }, a = c.delay(25, function () {
            b.send_stop = null, b.send_schedule()
        })
    }, A.prototype.send_schedule = function () {
        var a = this;
        if (a.send_buffer.length > 0) {
            var b = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, b, function (b, c) {
                a.send_stop = null, b === !1 ? a.ri._didClose(1006, "Sending error " + c) : a.send_schedule_wait()
            }), a.send_buffer = []
        }
    }, A.prototype.send_destructor = function () {
        var a = this;
        a._send_stop && a._send_stop(), a._send_stop = null
    };
    var B = function (b, d, e) {
        var f = this;
        if (!("_send_form"in f)) {
            var g = f._send_form = a.createElement("form"), h = f._send_area = a.createElement("textarea");
            h.name = "d", g.style.display = "none", g.style.position = "absolute", g.method = "POST", g.enctype = "application/x-www-form-urlencoded", g.acceptCharset = "UTF-8", g.appendChild(h), a.body.appendChild(g)
        }
        var g = f._send_form, h = f._send_area, i = "a" + c.random_string(8);
        g.target = i, g.action = b + "/jsonp_send?i=" + i;
        var j;
        try {
            j = a.createElement('<iframe name="' + i + '">')
        } catch (k) {
            j = a.createElement("iframe"), j.name = i
        }
        j.id = i, g.appendChild(j), j.style.display = "none";
        try {
            h.value = d
        } catch (l) {
            c.log("Your browser is seriously broken. Go home! " + l.message)
        }
        g.submit();
        var m = function () {
            j.onerror && (j.onreadystatechange = j.onerror = j.onload = null, c.delay(500, function () {
                j.parentNode.removeChild(j), j = null
            }), h.value = "", e(!0))
        };
        return j.onerror = j.onload = m, j.onreadystatechange = function () {
            "complete" == j.readyState && m()
        }, m
    }, C = function (a) {
        return function (b, c, d) {
            var e = new a("POST", b + "/xhr_send", c);
            return e.onfinish = function (a) {
                d(200 === a || 204 === a, "http status " + a)
            }, function (a) {
                d(!1, a)
            }
        }
    }, D = function (b, d) {
        var e, f, g = a.createElement("script"), h = function (a) {
            f && (f.parentNode.removeChild(f), f = null), g && (clearTimeout(e), g.parentNode.removeChild(g), g.onreadystatechange = g.onerror = g.onload = g.onclick = null, g = null, d(a), d = null)
        }, i = !1, j = null;
        if (g.id = "a" + c.random_string(8), g.src = b, g.type = "text/javascript", g.charset = "UTF-8", g.onerror = function () {
            j || (j = setTimeout(function () {
                i || h(c.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
            }, 1e3))
        }, g.onload = function () {
            h(c.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
        }, g.onreadystatechange = function () {
            if (/loaded|closed/.test(g.readyState)) {
                if (g && g.htmlFor && g.onclick) {
                    i = !0;
                    try {
                        g.onclick()
                    } catch (a) {
                    }
                }
                g && h(c.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
            }
        }, "undefined" == typeof g.async && a.attachEvent)if (/opera/i.test(navigator.userAgent))f = a.createElement("script"), f.text = "try{var a = document.getElementById('" + g.id + "'); if(a)a.onerror();}catch(x){};", g.async = f.async = !1; else {
            try {
                g.htmlFor = g.id, g.event = "onclick"
            } catch (k) {
            }
            g.async = !0
        }
        "undefined" != typeof g.async && (g.async = !0), e = setTimeout(function () {
            h(c.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
        }, 35e3);
        var l = a.getElementsByTagName("head")[0];
        return l.insertBefore(g, l.firstChild), f && l.insertBefore(f, l.firstChild), h
    }, E = y["jsonp-polling"] = function (a, b) {
        c.polluteGlobalNamespace();
        var d = this;
        d.ri = a, d.trans_url = b, d.send_constructor(B), d._schedule_recv()
    };
    E.prototype = new A, E.prototype._schedule_recv = function () {
        var a = this, b = function (b) {
            a._recv_stop = null, b && (a._is_closing || a.ri._didMessage(b)), a._is_closing || a._schedule_recv()
        };
        a._recv_stop = F(a.trans_url + "/jsonp", D, b)
    }, E.enabled = function () {
        return!0
    }, E.need_body = !0, E.prototype.doCleanup = function () {
        var a = this;
        a._is_closing = !0, a._recv_stop && a._recv_stop(), a.ri = a._recv_stop = null, a.send_destructor()
    };
    var F = function (a, d, e) {
        var f = "a" + c.random_string(6), g = a + "?c=" + escape(h + "." + f), i = 0, j = function (a) {
            switch (i) {
                case 0:
                    delete b[h][f], e(a);
                    break;
                case 1:
                    e(a), i = 2;
                    break;
                case 2:
                    delete b[h][f]
            }
        }, k = d(g, j);
        b[h][f] = k;
        var l = function () {
            b[h][f] && (i = 1, b[h][f](c.closeFrame(1e3, "JSONP user aborted read")))
        };
        return l
    }, G = function () {
    };
    G.prototype = new A, G.prototype.run = function (a, b, c, d, e) {
        var f = this;
        f.ri = a, f.trans_url = b, f.send_constructor(C(e)), f.poll = new $(a, d, b + c, e)
    }, G.prototype.doCleanup = function () {
        var a = this;
        a.poll && (a.poll.abort(), a.poll = null)
    };
    var H = y["xhr-streaming"] = function (a, b) {
        this.run(a, b, "/xhr_streaming", db, c.XHRCorsObject)
    };
    H.prototype = new G, H.enabled = function () {
        return b.XMLHttpRequest && "withCredentials"in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    }, H.roundTrips = 2, H.need_body = !0;
    var I = y["xdr-streaming"] = function (a, b) {
        this.run(a, b, "/xhr_streaming", db, c.XDRObject)
    };
    I.prototype = new G, I.enabled = function () {
        return!!b.XDomainRequest
    }, I.roundTrips = 2;
    var J = y["xhr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", db, c.XHRCorsObject)
    };
    J.prototype = new G, J.enabled = H.enabled, J.roundTrips = 2;
    var K = y["xdr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", db, c.XDRObject)
    };
    K.prototype = new G, K.enabled = I.enabled, K.roundTrips = 2;
    var L = function () {
    };
    L.prototype.i_constructor = function (a, b, d) {
        var e = this;
        e.ri = a, e.origin = c.getOrigin(d), e.base_url = d, e.trans_url = b;
        var f = d + "/iframe.html";
        e.ri._options.devel && (f += "?t=" + +new Date), e.window_id = c.random_string(8), f += "#" + e.window_id, e.iframeObj = c.createIframe(f, function (a) {
            e.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        }), e.onmessage_cb = c.bind(e.onmessage, e), c.attachMessage(e.onmessage_cb)
    }, L.prototype.doCleanup = function () {
        var a = this;
        if (a.iframeObj) {
            c.detachMessage(a.onmessage_cb);
            try {
                a.iframeObj.iframe.contentWindow && a.postMessage("c")
            } catch (b) {
            }
            a.iframeObj.cleanup(), a.iframeObj = null, a.onmessage_cb = a.iframeObj = null
        }
    }, L.prototype.onmessage = function (a) {
        var b = this;
        if (a.origin === b.origin) {
            var c = a.data.slice(0, 8), d = a.data.slice(8, 9), e = a.data.slice(9);
            if (c === b.window_id)switch (d) {
                case"s":
                    b.iframeObj.loaded(), b.postMessage("s", JSON.stringify([y.version, b.protocol, b.trans_url, b.base_url]));
                    break;
                case"t":
                    b.ri._didMessage(e)
            }
        }
    }, L.prototype.postMessage = function (a, b) {
        var c = this;
        c.iframeObj.post(c.window_id + a + (b || ""), c.origin)
    }, L.prototype.doSend = function (a) {
        this.postMessage("m", a)
    }, L.enabled = function () {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return("function" == typeof b.postMessage || "object" == typeof b.postMessage) && !a
    };
    var M, N = function (a, d) {
        parent !== b ? parent.postMessage(M + a + (d || ""), "*") : c.log("Can't postMessage, no parent window.", a, d)
    }, O = function () {
    };
    O.prototype._didClose = function (a, b) {
        N("t", c.closeFrame(a, b))
    }, O.prototype._didMessage = function (a) {
        N("t", a)
    }, O.prototype._doSend = function (a) {
        this._transport.doSend(a)
    }, O.prototype._doCleanup = function () {
        this._transport.doCleanup()
    }, c.parent_origin = void 0, y.bootstrap_iframe = function () {
        var d;
        M = a.location.hash.slice(1);
        var e = function (a) {
            if (a.source === parent && ("undefined" == typeof c.parent_origin && (c.parent_origin = a.origin), a.origin === c.parent_origin)) {
                var e = a.data.slice(0, 8), f = a.data.slice(8, 9), g = a.data.slice(9);
                if (e === M)switch (f) {
                    case"s":
                        var h = JSON.parse(g), i = h[0], j = h[1], k = h[2], l = h[3];
                        if (i !== y.version && c.log('Incompatibile SockJS! Main site uses: "' + i + '", the iframe: "' + y.version + '".'), !c.flatUrl(k) || !c.flatUrl(l))return c.log("Only basic urls are supported in SockJS"), void 0;
                        if (!c.isSameOriginUrl(k) || !c.isSameOriginUrl(l))return c.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([b.location.href, k, l]) + ")"), void 0;
                        d = new O, d._transport = new O[j](d, k, l);
                        break;
                    case"m":
                        d._doSend(g);
                        break;
                    case"c":
                        d && d._doCleanup(), d = null
                }
            }
        };
        c.attachMessage(e), N("s")
    };
    var P = function (a, b) {
        var d = this;
        c.delay(function () {
            d.doXhr(a, b)
        })
    };
    P.prototype = new f(["finish"]), P.prototype.doXhr = function (a, b) {
        var d = this, e = (new Date).getTime(), f = new b("GET", a + "/info"), g = c.delay(8e3, function () {
            f.ontimeout()
        });
        f.onfinish = function (a, b) {
            if (clearTimeout(g), g = null, 200 === a) {
                var c = (new Date).getTime() - e, f = JSON.parse(b);
                "object" != typeof f && (f = {}), d.emit("finish", f, c)
            } else d.emit("finish")
        }, f.ontimeout = function () {
            f.close(), d.emit("finish")
        }
    };
    var Q = function (b) {
        var d = this, e = function () {
            var a = new L;
            a.protocol = "w-iframe-info-receiver";
            var c = function (b) {
                if ("string" == typeof b && "m" === b.substr(0, 1)) {
                    var c = JSON.parse(b.substr(1)), e = c[0], f = c[1];
                    d.emit("finish", e, f)
                } else d.emit("finish");
                a.doCleanup(), a = null
            }, e = {_options: {}, _didClose: c, _didMessage: c};
            a.i_constructor(e, b, b)
        };
        a.body ? e() : c.attachEvent("load", e)
    };
    Q.prototype = new f(["finish"]);
    var R = function () {
        var a = this;
        c.delay(function () {
            a.emit("finish", {}, 2e3)
        })
    };
    R.prototype = new f(["finish"]);
    var S = function (a) {
        if (c.isSameOriginUrl(a))return new P(a, c.XHRLocalObject);
        switch (c.isXHRCorsCapable()) {
            case 1:
                return new P(a, c.XHRLocalObject);
            case 2:
                return new P(a, c.XDRObject);
            case 3:
                return new Q(a);
            default:
                return new R
        }
    }, T = O["w-iframe-info-receiver"] = function (a, b, d) {
        var e = new P(d, c.XHRLocalObject);
        e.onfinish = function (b, c) {
            a._didMessage("m" + JSON.stringify([b, c])), a._didClose()
        }
    };
    T.prototype.doCleanup = function () {
    };
    var U = y["iframe-eventsource"] = function () {
        var a = this;
        a.protocol = "w-iframe-eventsource", a.i_constructor.apply(a, arguments)
    };
    U.prototype = new L, U.enabled = function () {
        return"EventSource"in b && L.enabled()
    }, U.need_body = !0, U.roundTrips = 3;
    var V = O["w-iframe-eventsource"] = function (a, b) {
        this.run(a, b, "/eventsource", _, c.XHRLocalObject)
    };
    V.prototype = new G;
    var W = y["iframe-xhr-polling"] = function () {
        var a = this;
        a.protocol = "w-iframe-xhr-polling", a.i_constructor.apply(a, arguments)
    };
    W.prototype = new L, W.enabled = function () {
        return b.XMLHttpRequest && L.enabled()
    }, W.need_body = !0, W.roundTrips = 3;
    var X = O["w-iframe-xhr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", db, c.XHRLocalObject)
    };
    X.prototype = new G;
    var Y = y["iframe-htmlfile"] = function () {
        var a = this;
        a.protocol = "w-iframe-htmlfile", a.i_constructor.apply(a, arguments)
    };
    Y.prototype = new L, Y.enabled = function () {
        return L.enabled()
    }, Y.need_body = !0, Y.roundTrips = 3;
    var Z = O["w-iframe-htmlfile"] = function (a, b) {
        this.run(a, b, "/htmlfile", cb, c.XHRLocalObject)
    };
    Z.prototype = new G;
    var $ = function (a, b, c, d) {
        var e = this;
        e.ri = a, e.Receiver = b, e.recv_url = c, e.AjaxObject = d, e._scheduleRecv()
    };
    $.prototype._scheduleRecv = function () {
        var a = this, b = a.poll = new a.Receiver(a.recv_url, a.AjaxObject), c = 0;
        b.onmessage = function (b) {
            c += 1, a.ri._didMessage(b.data)
        }, b.onclose = function (c) {
            a.poll = b = b.onmessage = b.onclose = null, a.poll_is_closing || ("permanent" === c.reason ? a.ri._didClose(1006, "Polling error (" + c.reason + ")") : a._scheduleRecv())
        }
    }, $.prototype.abort = function () {
        var a = this;
        a.poll_is_closing = !0, a.poll && a.poll.abort()
    };
    var _ = function (a) {
        var b = this, d = new EventSource(a);
        d.onmessage = function (a) {
            b.dispatchEvent(new e("message", {data: unescape(a.data)}))
        }, b.es_close = d.onerror = function (a, f) {
            var g = f ? "user" : 2 !== d.readyState ? "network" : "permanent";
            b.es_close = d.onmessage = d.onerror = null, d.close(), d = null, c.delay(200, function () {
                b.dispatchEvent(new e("close", {reason: g}))
            })
        }
    };
    _.prototype = new d, _.prototype.abort = function () {
        var a = this;
        a.es_close && a.es_close({}, !0)
    };
    var ab, bb = function () {
        if (void 0 === ab)if ("ActiveXObject"in b)try {
            ab = !!new ActiveXObject("htmlfile")
        } catch (a) {
        } else ab = !1;
        return ab
    }, cb = function (a) {
        var d = this;
        c.polluteGlobalNamespace(), d.id = "a" + c.random_string(6, 26), a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape(h + "." + d.id);
        var f, g = bb() ? c.createHtmlfile : c.createIframe;
        b[h][d.id] = {start: function () {
            f.loaded()
        }, message: function (a) {
            d.dispatchEvent(new e("message", {data: a}))
        }, stop: function () {
            d.iframe_close({}, "network")
        }}, d.iframe_close = function (a, c) {
            f.cleanup(), d.iframe_close = f = null, delete b[h][d.id], d.dispatchEvent(new e("close", {reason: c}))
        }, f = g(a, function () {
            d.iframe_close({}, "permanent")
        })
    };
    cb.prototype = new d, cb.prototype.abort = function () {
        var a = this;
        a.iframe_close && a.iframe_close({}, "user")
    };
    var db = function (a, b) {
        var c = this, d = 0;
        c.xo = new b("POST", a, null), c.xo.onchunk = function (a, b) {
            if (200 === a)for (; ;) {
                var f = b.slice(d), g = f.indexOf("\n");
                if (-1 === g)break;
                d += g + 1;
                var h = f.slice(0, g);
                c.dispatchEvent(new e("message", {data: h}))
            }
        }, c.xo.onfinish = function (a, b) {
            c.xo.onchunk(a, b), c.xo = null;
            var d = 200 === a ? "network" : "permanent";
            c.dispatchEvent(new e("close", {reason: d}))
        }
    };
    return db.prototype = new d, db.prototype.abort = function () {
        var a = this;
        a.xo && (a.xo.close(), a.dispatchEvent(new e("close", {reason: "user"})), a.xo = null)
    }, y.getUtils = function () {
        return c
    }, y.getIframeTransport = function () {
        return L
    }, y
}();
"_sockjs_onload"in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function () {
    return SockJS
}), function (a, b) {
    "object" == typeof exports ? module.exports = b(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], b) : a.URI = b(a.punycode, a.IPv6, a.SecondLevelDomains, a)
}(this, function (a, b, c, d) {
    function e(a, b) {
        return this instanceof e ? (void 0 === a && (a = "undefined" != typeof location ? location.href + "" : ""), this.href(a), void 0 !== b ? this.absoluteTo(b) : this) : new e(a, b)
    }

    function f(a) {
        return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function g(a) {
        return void 0 === a ? "Undefined" : String(Object.prototype.toString.call(a)).slice(8, -1)
    }

    function h(a) {
        return"Array" === g(a)
    }

    function i(a, b) {
        var c, d, e = {};
        if (h(b))for (c = 0, d = b.length; d > c; c++)e[b[c]] = !0; else e[b] = !0;
        for (c = 0, d = a.length; d > c; c++)void 0 !== e[a[c]] && (a.splice(c, 1), d--, c--);
        return a
    }

    function j(a, b) {
        var c, d;
        if (h(b)) {
            for (c = 0, d = b.length; d > c; c++)if (!j(a, b[c]))return!1;
            return!0
        }
        var e = g(b);
        for (c = 0, d = a.length; d > c; c++)if ("RegExp" === e) {
            if ("string" == typeof a[c] && a[c].match(b))return!0
        } else if (a[c] === b)return!0;
        return!1
    }

    function k(a, b) {
        if (!h(a) || !h(b))return!1;
        if (a.length !== b.length)return!1;
        a.sort(), b.sort();
        for (var c = 0, d = a.length; d > c; c++)if (a[c] !== b[c])return!1;
        return!0
    }

    function l(a) {
        return escape(a)
    }

    function m(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, l).replace(/\*/g, "%2A")
    }

    var n = d && d.URI, o = e.prototype, p = Object.prototype.hasOwnProperty;
    e._parts = function () {
        return{protocol: null, username: null, password: null, hostname: null, urn: null, port: null, path: null, query: null, fragment: null, duplicateQueryParameters: e.duplicateQueryParameters, escapeQuerySpace: e.escapeQuerySpace}
    }, e.duplicateQueryParameters = !1, e.escapeQuerySpace = !0, e.protocol_expression = /^[a-z][a-z0-9-+-]*$/i, e.idn_expression = /[^a-z0-9\.-]/i, e.punycode_expression = /(xn--)/i, e.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, e.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, e.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, e.defaultPorts = {http: "80", https: "443", ftp: "21", gopher: "70", ws: "80", wss: "443"}, e.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, e.domAttributes = {a: "href", blockquote: "cite", link: "href", base: "href", script: "src", form: "action", img: "src", area: "href", iframe: "src", embed: "src", source: "src", track: "src", input: "src"}, e.getDomAttribute = function (a) {
        if (!a || !a.nodeName)return void 0;
        var b = a.nodeName.toLowerCase();
        return"input" === b && "image" !== a.type ? void 0 : e.domAttributes[b]
    }, e.encode = m, e.decode = decodeURIComponent, e.iso8859 = function () {
        e.encode = escape, e.decode = unescape
    }, e.unicode = function () {
        e.encode = m, e.decode = decodeURIComponent
    }, e.characters = {pathname: {encode: {expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi, map: {"%24": "$", "%26": "&", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%3A": ":", "%40": "@"}}, decode: {expression: /[\/\?#]/g, map: {"/": "%2F", "?": "%3F", "#": "%23"}}}, reserved: {encode: {expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi, map: {"%3A": ":", "%2F": "/", "%3F": "?", "%23": "#", "%5B": "[", "%5D": "]", "%40": "@", "%21": "!", "%24": "$", "%26": "&", "%27": "'", "%28": "(", "%29": ")", "%2A": "*", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "="}}}}, e.encodeQuery = function (a, b) {
        var c = e.encode(a + "");
        return b ? c.replace(/%20/g, "+") : c
    }, e.decodeQuery = function (a, b) {
        a += "";
        try {
            return e.decode(b ? a.replace(/\+/g, "%20") : a)
        } catch (c) {
            return a
        }
    }, e.recodePath = function (a) {
        for (var b = (a + "").split("/"), c = 0, d = b.length; d > c; c++)b[c] = e.encodePathSegment(e.decode(b[c]));
        return b.join("/")
    }, e.decodePath = function (a) {
        for (var b = (a + "").split("/"), c = 0, d = b.length; d > c; c++)b[c] = e.decodePathSegment(b[c]);
        return b.join("/")
    };
    var q, r = {encode: "encode", decode: "decode"}, s = function (a, b) {
        return function (c) {
            return e[b](c + "").replace(e.characters[a][b].expression, function (c) {
                return e.characters[a][b].map[c]
            })
        }
    };
    for (q in r)e[q + "PathSegment"] = s("pathname", r[q]);
    e.encodeReserved = s("reserved", "encode"), e.parse = function (a, b) {
        var c;
        return b || (b = {}), c = a.indexOf("#"), c > -1 && (b.fragment = a.substring(c + 1) || null, a = a.substring(0, c)), c = a.indexOf("?"), c > -1 && (b.query = a.substring(c + 1) || null, a = a.substring(0, c)), "//" === a.substring(0, 2) ? (b.protocol = null, a = a.substring(2), a = e.parseAuthority(a, b)) : (c = a.indexOf(":"), c > -1 && (b.protocol = a.substring(0, c) || null, b.protocol && !b.protocol.match(e.protocol_expression) ? b.protocol = void 0 : "file" === b.protocol ? a = a.substring(c + 3) : "//" === a.substring(c + 1, c + 3) ? (a = a.substring(c + 3), a = e.parseAuthority(a, b)) : (a = a.substring(c + 1), b.urn = !0))), b.path = a, b
    }, e.parseHost = function (a, b) {
        var c, d, e = a.indexOf("/");
        return-1 === e && (e = a.length), "[" === a.charAt(0) ? (c = a.indexOf("]"), b.hostname = a.substring(1, c) || null, b.port = a.substring(c + 2, e) || null) : a.indexOf(":") !== a.lastIndexOf(":") ? (b.hostname = a.substring(0, e) || null, b.port = null) : (d = a.substring(0, e).split(":"), b.hostname = d[0] || null, b.port = d[1] || null), b.hostname && "/" !== a.substring(e).charAt(0) && (e++, a = "/" + a), a.substring(e) || "/"
    }, e.parseAuthority = function (a, b) {
        return a = e.parseUserinfo(a, b), e.parseHost(a, b)
    }, e.parseUserinfo = function (a, b) {
        var c, d = a.indexOf("/"), f = d > -1 ? a.lastIndexOf("@", d) : a.indexOf("@");
        return f > -1 && (-1 === d || d > f) ? (c = a.substring(0, f).split(":"), b.username = c[0] ? e.decode(c[0]) : null, c.shift(), b.password = c[0] ? e.decode(c.join(":")) : null, a = a.substring(f + 1)) : (b.username = null, b.password = null), a
    }, e.parseQuery = function (a, b) {
        if (!a)return{};
        if (a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !a)return{};
        for (var c, d, f, g = {}, h = a.split("&"), i = h.length, j = 0; i > j; j++)c = h[j].split("="), d = e.decodeQuery(c.shift(), b), f = c.length ? e.decodeQuery(c.join("="), b) : null, g[d] ? ("string" == typeof g[d] && (g[d] = [g[d]]), g[d].push(f)) : g[d] = f;
        return g
    }, e.build = function (a) {
        var b = "";
        return a.protocol && (b += a.protocol + ":"), a.urn || !b && !a.hostname || (b += "//"), b += e.buildAuthority(a) || "", "string" == typeof a.path && ("/" !== a.path.charAt(0) && "string" == typeof a.hostname && (b += "/"), b += a.path), "string" == typeof a.query && a.query && (b += "?" + a.query), "string" == typeof a.fragment && a.fragment && (b += "#" + a.fragment), b
    }, e.buildHost = function (a) {
        var b = "";
        return a.hostname ? (e.ip6_expression.test(a.hostname) ? b += a.port ? "[" + a.hostname + "]:" + a.port : a.hostname : (b += a.hostname, a.port && (b += ":" + a.port)), b) : ""
    }, e.buildAuthority = function (a) {
        return e.buildUserinfo(a) + e.buildHost(a)
    }, e.buildUserinfo = function (a) {
        var b = "";
        return a.username && (b += e.encode(a.username), a.password && (b += ":" + e.encode(a.password)), b += "@"), b
    }, e.buildQuery = function (a, b, c) {
        var d, f, g, i, j = "";
        for (f in a)if (p.call(a, f) && f)if (h(a[f]))for (d = {}, g = 0, i = a[f].length; i > g; g++)void 0 !== a[f][g] && void 0 === d[a[f][g] + ""] && (j += "&" + e.buildQueryParameter(f, a[f][g], c), b !== !0 && (d[a[f][g] + ""] = !0)); else void 0 !== a[f] && (j += "&" + e.buildQueryParameter(f, a[f], c));
        return j.substring(1)
    }, e.buildQueryParameter = function (a, b, c) {
        return e.encodeQuery(a, c) + (null !== b ? "=" + e.encodeQuery(b, c) : "")
    }, e.addQuery = function (a, b, c) {
        if ("object" == typeof b)for (var d in b)p.call(b, d) && e.addQuery(a, d, b[d]); else {
            if ("string" != typeof b)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (void 0 === a[b])return a[b] = c, void 0;
            "string" == typeof a[b] && (a[b] = [a[b]]), h(c) || (c = [c]), a[b] = a[b].concat(c)
        }
    }, e.removeQuery = function (a, b, c) {
        var d, f, g;
        if (h(b))for (d = 0, f = b.length; f > d; d++)a[b[d]] = void 0; else if ("object" == typeof b)for (g in b)p.call(b, g) && e.removeQuery(a, g, b[g]); else {
            if ("string" != typeof b)throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            void 0 !== c ? a[b] === c ? a[b] = void 0 : h(a[b]) && (a[b] = i(a[b], c)) : a[b] = void 0
        }
    }, e.hasQuery = function (a, b, c, d) {
        if ("object" == typeof b) {
            for (var f in b)if (p.call(b, f) && !e.hasQuery(a, f, b[f]))return!1;
            return!0
        }
        if ("string" != typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        switch (g(c)) {
            case"Undefined":
                return b in a;
            case"Boolean":
                var i = Boolean(h(a[b]) ? a[b].length : a[b]);
                return c === i;
            case"Function":
                return!!c(a[b], b, a);
            case"Array":
                if (!h(a[b]))return!1;
                var l = d ? j : k;
                return l(a[b], c);
            case"RegExp":
                return h(a[b]) ? d ? j(a[b], c) : !1 : Boolean(a[b] && a[b].match(c));
            case"Number":
                c = String(c);
            case"String":
                return h(a[b]) ? d ? j(a[b], c) : !1 : a[b] === c;
            default:
                throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
    }, e.commonPath = function (a, b) {
        var c, d = Math.min(a.length, b.length);
        for (c = 0; d > c; c++)if (a.charAt(c) !== b.charAt(c)) {
            c--;
            break
        }
        return 1 > c ? a.charAt(0) === b.charAt(0) && "/" === a.charAt(0) ? "/" : "" : (("/" !== a.charAt(c) || "/" !== b.charAt(c)) && (c = a.substring(0, c).lastIndexOf("/")), a.substring(0, c + 1))
    }, e.withinString = function (a, b) {
        return a.replace(e.find_uri_expression, b)
    }, e.ensureValidHostname = function (b) {
        if (b.match(e.invalid_hostname_characters)) {
            if (!a)throw new TypeError("Hostname '" + b + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (a.toASCII(b).match(e.invalid_hostname_characters))throw new TypeError("Hostname '" + b + "' contains characters other than [A-Z0-9.-]")
        }
    }, e.noConflict = function (a) {
        if (a) {
            var c = {URI: this.noConflict()};
            return URITemplate && "function" == typeof URITemplate.noConflict && (c.URITemplate = URITemplate.noConflict()), b && "function" == typeof b.noConflict && (c.IPv6 = b.noConflict()), SecondLevelDomains && "function" == typeof SecondLevelDomains.noConflict && (c.SecondLevelDomains = SecondLevelDomains.noConflict()), c
        }
        return d.URI === this && (d.URI = n), this
    }, o.build = function (a) {
        return a === !0 ? this._deferred_build = !0 : (void 0 === a || this._deferred_build) && (this._string = e.build(this._parts), this._deferred_build = !1), this
    }, o.clone = function () {
        return new e(this)
    }, o.valueOf = o.toString = function () {
        return this.build(!1)._string
    }, r = {protocol: "protocol", username: "username", password: "password", hostname: "hostname", port: "port"}, s = function (a) {
        return function (b, c) {
            return void 0 === b ? this._parts[a] || "" : (this._parts[a] = b || null, this.build(!c), this)
        }
    };
    for (q in r)o[q] = s(r[q]);
    r = {query: "?", fragment: "#"}, s = function (a, b) {
        return function (c, d) {
            return void 0 === c ? this._parts[a] || "" : (null !== c && (c += "", c.charAt(0) === b && (c = c.substring(1))), this._parts[a] = c, this.build(!d), this)
        }
    };
    for (q in r)o[q] = s(q, r[q]);
    r = {search: ["?", "query"], hash: ["#", "fragment"]}, s = function (a, b) {
        return function (c, d) {
            var e = this[a](c, d);
            return"string" == typeof e && e.length ? b + e : e
        }
    };
    for (q in r)o[q] = s(r[q][1], r[q][0]);
    o.pathname = function (a, b) {
        if (void 0 === a || a === !0) {
            var c = this._parts.path || (this._parts.hostname ? "/" : "");
            return a ? e.decodePath(c) : c
        }
        return this._parts.path = a ? e.recodePath(a) : "/", this.build(!b), this
    }, o.path = o.pathname, o.href = function (a, b) {
        var c;
        if (void 0 === a)return this.toString();
        this._string = "", this._parts = e._parts();
        var d = a instanceof e, f = "object" == typeof a && (a.hostname || a.path || a.pathname);
        if (a.nodeName) {
            var g = e.getDomAttribute(a);
            a = a[g] || "", f = !1
        }
        if (!d && f && void 0 !== a.pathname && (a = a.toString()), "string" == typeof a)this._parts = e.parse(a, this._parts); else {
            if (!d && !f)throw new TypeError("invalid input");
            var h = d ? a._parts : a;
            for (c in h)p.call(this._parts, c) && (this._parts[c] = h[c])
        }
        return this.build(!b), this
    }, o.is = function (a) {
        var b = !1, d = !1, f = !1, g = !1, h = !1, i = !1, j = !1, k = !this._parts.urn;
        switch (this._parts.hostname && (k = !1, d = e.ip4_expression.test(this._parts.hostname), f = e.ip6_expression.test(this._parts.hostname), b = d || f, g = !b, h = g && c && c.has(this._parts.hostname), i = g && e.idn_expression.test(this._parts.hostname), j = g && e.punycode_expression.test(this._parts.hostname)), a.toLowerCase()) {
            case"relative":
                return k;
            case"absolute":
                return!k;
            case"domain":
            case"name":
                return g;
            case"sld":
                return h;
            case"ip":
                return b;
            case"ip4":
            case"ipv4":
            case"inet4":
                return d;
            case"ip6":
            case"ipv6":
            case"inet6":
                return f;
            case"idn":
                return i;
            case"url":
                return!this._parts.urn;
            case"urn":
                return!!this._parts.urn;
            case"punycode":
                return j
        }
        return null
    };
    var t = o.protocol, u = o.port, v = o.hostname;
    o.protocol = function (a, b) {
        if (void 0 !== a && a && (a = a.replace(/:(\/\/)?$/, ""), a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '" + a + "' contains characters other than [A-Z0-9.+-]");
        return t.call(this, a, b)
    }, o.scheme = o.protocol, o.port = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 !== a && (0 === a && (a = null), a && (a += "", ":" === a.charAt(0) && (a = a.substring(1)), a.match(/[^0-9]/))))throw new TypeError("Port '" + a + "' contains characters other than [0-9]");
        return u.call(this, a, b)
    }, o.hostname = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 !== a) {
            var c = {};
            e.parseHost(a, c), a = c.hostname
        }
        return v.call(this, a, b)
    }, o.host = function (a, b) {
        return this._parts.urn ? void 0 === a ? "" : this : void 0 === a ? this._parts.hostname ? e.buildHost(this._parts) : "" : (e.parseHost(a, this._parts), this.build(!b), this)
    }, o.authority = function (a, b) {
        return this._parts.urn ? void 0 === a ? "" : this : void 0 === a ? this._parts.hostname ? e.buildAuthority(this._parts) : "" : (e.parseAuthority(a, this._parts), this.build(!b), this)
    }, o.userinfo = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 === a) {
            if (!this._parts.username)return"";
            var c = e.buildUserinfo(this._parts);
            return c.substring(0, c.length - 1)
        }
        return"@" !== a[a.length - 1] && (a += "@"), e.parseUserinfo(a, this._parts), this.build(!b), this
    }, o.resource = function (a, b) {
        var c;
        return void 0 === a ? this.path() + this.search() + this.hash() : (c = e.parse(a), this._parts.path = c.path, this._parts.query = c.query, this._parts.fragment = c.fragment, this.build(!b), this)
    }, o.subdomain = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 === a) {
            if (!this._parts.hostname || this.is("IP"))return"";
            var c = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, c) || ""
        }
        var d = this._parts.hostname.length - this.domain().length, g = this._parts.hostname.substring(0, d), h = new RegExp("^" + f(g));
        return a && "." !== a.charAt(a.length - 1) && (a += "."), a && e.ensureValidHostname(a), this._parts.hostname = this._parts.hostname.replace(h, a), this.build(!b), this
    }, o.domain = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if ("boolean" == typeof a && (b = a, a = void 0), void 0 === a) {
            if (!this._parts.hostname || this.is("IP"))return"";
            var c = this._parts.hostname.match(/\./g);
            if (c && c.length < 2)return this._parts.hostname;
            var d = this._parts.hostname.length - this.tld(b).length - 1;
            return d = this._parts.hostname.lastIndexOf(".", d - 1) + 1, this._parts.hostname.substring(d) || ""
        }
        if (!a)throw new TypeError("cannot set domain empty");
        if (e.ensureValidHostname(a), !this._parts.hostname || this.is("IP"))this._parts.hostname = a; else {
            var g = new RegExp(f(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(g, a)
        }
        return this.build(!b), this
    }, o.tld = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if ("boolean" == typeof a && (b = a, a = void 0), void 0 === a) {
            if (!this._parts.hostname || this.is("IP"))return"";
            var d = this._parts.hostname.lastIndexOf("."), e = this._parts.hostname.substring(d + 1);
            return b !== !0 && c && c.list[e.toLowerCase()] ? c.get(this._parts.hostname) || e : e
        }
        var g;
        if (!a)throw new TypeError("cannot set TLD empty");
        if (a.match(/[^a-zA-Z0-9-]/)) {
            if (!c || !c.is(a))throw new TypeError("TLD '" + a + "' contains characters other than [A-Z0-9]");
            g = new RegExp(f(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(g, a)
        } else {
            if (!this._parts.hostname || this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");
            g = new RegExp(f(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(g, a)
        }
        return this.build(!b), this
    }, o.directory = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 === a || a === !0) {
            if (!this._parts.path && !this._parts.hostname)return"";
            if ("/" === this._parts.path)return"/";
            var c = this._parts.path.length - this.filename().length - 1, d = this._parts.path.substring(0, c) || (this._parts.hostname ? "/" : "");
            return a ? e.decodePath(d) : d
        }
        var g = this._parts.path.length - this.filename().length, h = this._parts.path.substring(0, g), i = new RegExp("^" + f(h));
        return this.is("relative") || (a || (a = "/"), "/" !== a.charAt(0) && (a = "/" + a)), a && "/" !== a.charAt(a.length - 1) && (a += "/"), a = e.recodePath(a), this._parts.path = this._parts.path.replace(i, a), this.build(!b), this
    }, o.filename = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 === a || a === !0) {
            if (!this._parts.path || "/" === this._parts.path)return"";
            var c = this._parts.path.lastIndexOf("/"), d = this._parts.path.substring(c + 1);
            return a ? e.decodePathSegment(d) : d
        }
        var g = !1;
        "/" === a.charAt(0) && (a = a.substring(1)), a.match(/\.?\//) && (g = !0);
        var h = new RegExp(f(this.filename()) + "$");
        return a = e.recodePath(a), this._parts.path = this._parts.path.replace(h, a), g ? this.normalizePath(b) : this.build(!b), this
    }, o.suffix = function (a, b) {
        if (this._parts.urn)return void 0 === a ? "" : this;
        if (void 0 === a || a === !0) {
            if (!this._parts.path || "/" === this._parts.path)return"";
            var c, d, g = this.filename(), h = g.lastIndexOf(".");
            return-1 === h ? "" : (c = g.substring(h + 1), d = /^[a-z0-9%]+$/i.test(c) ? c : "", a ? e.decodePathSegment(d) : d)
        }
        "." === a.charAt(0) && (a = a.substring(1));
        var i, j = this.suffix();
        if (j)i = a ? new RegExp(f(j) + "$") : new RegExp(f("." + j) + "$"); else {
            if (!a)return this;
            this._parts.path += "." + e.recodePath(a)
        }
        return i && (a = e.recodePath(a), this._parts.path = this._parts.path.replace(i, a)), this.build(!b), this
    }, o.segment = function (a, b, c) {
        var d = this._parts.urn ? ":" : "/", e = this.path(), f = "/" === e.substring(0, 1), g = e.split(d);
        if (void 0 !== a && "number" != typeof a && (c = b, b = a, a = void 0), void 0 !== a && "number" != typeof a)throw new Error("Bad segment '" + a + "', must be 0-based integer");
        if (f && g.shift(), 0 > a && (a = Math.max(g.length + a, 0)), void 0 === b)return void 0 === a ? g : g[a];
        if (null === a || void 0 === g[a])if (h(b)) {
            g = [];
            for (var i = 0, j = b.length; j > i; i++)(b[i].length || g.length && g[g.length - 1].length) && (g.length && !g[g.length - 1].length && g.pop(), g.push(b[i]))
        } else(b || "string" == typeof b) && ("" === g[g.length - 1] ? g[g.length - 1] = b : g.push(b)); else b || "string" == typeof b && b.length ? g[a] = b : g.splice(a, 1);
        return f && g.unshift(""), this.path(g.join(d), c)
    }, o.segmentCoded = function (a, b, c) {
        var d, f, g;
        if ("number" != typeof a && (c = b, b = a, a = void 0), void 0 === b) {
            if (d = this.segment(a, b, c), h(d))for (f = 0, g = d.length; g > f; f++)d[f] = e.decode(d[f]); else d = void 0 !== d ? e.decode(d) : void 0;
            return d
        }
        if (h(b))for (f = 0, g = b.length; g > f; f++)b[f] = e.decode(b[f]);
        else b = "string" == typeof b ? e.encode(b) : b;
        return this.segment(a, b, c)
    };
    var w = o.query;
    return o.query = function (a, b) {
        if (a === !0)return e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" == typeof a) {
            var c = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace), d = a.call(this, c);
            return this._parts.query = e.buildQuery(d || c, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this
        }
        return void 0 !== a && "string" != typeof a ? (this._parts.query = e.buildQuery(a, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this) : w.call(this, a, b)
    }, o.setQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("object" == typeof a)for (var f in a)p.call(a, f) && (d[f] = a[f]); else {
            if ("string" != typeof a)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            d[a] = void 0 !== b ? b : null
        }
        return this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof a && (c = b), this.build(!c), this
    }, o.addQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return e.addQuery(d, a, void 0 === b ? null : b), this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof a && (c = b), this.build(!c), this
    }, o.removeQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return e.removeQuery(d, a, b), this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof a && (c = b), this.build(!c), this
    }, o.hasQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return e.hasQuery(d, a, b, c)
    }, o.setSearch = o.setQuery, o.addSearch = o.addQuery, o.removeSearch = o.removeQuery, o.hasSearch = o.hasQuery, o.normalize = function () {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }, o.normalizeProtocol = function (a) {
        return"string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!a)), this
    }, o.normalizeHostname = function (c) {
        return this._parts.hostname && (this.is("IDN") && a ? this._parts.hostname = a.toASCII(this._parts.hostname) : this.is("IPv6") && b && (this._parts.hostname = b.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!c)), this
    }, o.normalizePort = function (a) {
        return"string" == typeof this._parts.protocol && this._parts.port === e.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!a)), this
    }, o.normalizePath = function (a) {
        if (this._parts.urn)return this;
        if (!this._parts.path || "/" === this._parts.path)return this;
        var b, c, d, f = this._parts.path;
        for ("/" !== f.charAt(0) && (b = !0, f = "/" + f), f = f.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"); ;) {
            if (c = f.indexOf("/../"), -1 === c)break;
            if (0 === c) {
                f = f.substring(3);
                break
            }
            d = f.substring(0, c).lastIndexOf("/"), -1 === d && (d = c), f = f.substring(0, d) + f.substring(c + 3)
        }
        return b && this.is("relative") && (f = f.substring(1)), f = e.recodePath(f), this._parts.path = f, this.build(!a), this
    }, o.normalizePathname = o.normalizePath, o.normalizeQuery = function (a) {
        return"string" == typeof this._parts.query && (this._parts.query.length ? this.query(e.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!a)), this
    }, o.normalizeFragment = function (a) {
        return this._parts.fragment || (this._parts.fragment = null, this.build(!a)), this
    }, o.normalizeSearch = o.normalizeQuery, o.normalizeHash = o.normalizeFragment, o.iso8859 = function () {
        var a = e.encode, b = e.decode;
        return e.encode = escape, e.decode = decodeURIComponent, this.normalize(), e.encode = a, e.decode = b, this
    }, o.unicode = function () {
        var a = e.encode, b = e.decode;
        return e.encode = m, e.decode = unescape, this.normalize(), e.encode = a, e.decode = b, this
    }, o.readable = function () {
        var b = this.clone();
        b.username("").password("").normalize();
        var c = "";
        if (b._parts.protocol && (c += b._parts.protocol + "://"), b._parts.hostname && (b.is("punycode") && a ? (c += a.toUnicode(b._parts.hostname), b._parts.port && (c += ":" + b._parts.port)) : c += b.host()), b._parts.hostname && b._parts.path && "/" !== b._parts.path.charAt(0) && (c += "/"), c += b.path(!0), b._parts.query) {
            for (var d = "", f = 0, g = b._parts.query.split("&"), h = g.length; h > f; f++) {
                var i = (g[f] || "").split("=");
                d += "&" + e.decodeQuery(i[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), void 0 !== i[1] && (d += "=" + e.decodeQuery(i[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
            }
            c += "?" + d.substring(1)
        }
        return c += e.decodeQuery(b.hash(), !0)
    }, o.absoluteTo = function (a) {
        var b, c, d, f = this.clone(), g = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");
        if (a instanceof e || (a = new e(a)), f._parts.protocol || (f._parts.protocol = a._parts.protocol), this._parts.hostname)return f;
        for (c = 0; d = g[c]; c++)f._parts[d] = a._parts[d];
        for (g = ["query", "path"], c = 0; d = g[c]; c++)!f._parts[d] && a._parts[d] && (f._parts[d] = a._parts[d]);
        return"/" !== f.path().charAt(0) && (b = a.directory(), f._parts.path = (b ? b + "/" : "") + f._parts.path, f.normalizePath()), f.build(), f
    }, o.relativeTo = function (a) {
        var b, c, d, f, g, h = this.clone().normalize();
        if (h._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");
        if (a = new e(a).normalize(), b = h._parts, c = a._parts, f = h.path(), g = a.path(), "/" !== f.charAt(0))throw new Error("URI is already relative");
        if ("/" !== g.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI");
        if (b.protocol === c.protocol && (b.protocol = null), b.username !== c.username || b.password !== c.password)return h.build();
        if (null !== b.protocol || null !== b.username || null !== b.password)return h.build();
        if (b.hostname !== c.hostname || b.port !== c.port)return h.build();
        if (b.hostname = null, b.port = null, f === g)return b.path = "", h.build();
        if (d = e.commonPath(h.path(), a.path()), !d)return h.build();
        var i = c.path.substring(d.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
        return b.path = i + b.path.substring(d.length), h.build()
    }, o.equals = function (a) {
        var b, c, d, f = this.clone(), g = new e(a), i = {}, j = {}, l = {};
        if (f.normalize(), g.normalize(), f.toString() === g.toString())return!0;
        if (b = f.query(), c = g.query(), f.query(""), g.query(""), f.toString() !== g.toString())return!1;
        if (b.length !== c.length)return!1;
        i = e.parseQuery(b, this._parts.escapeQuerySpace), j = e.parseQuery(c, this._parts.escapeQuerySpace);
        for (d in i)if (p.call(i, d)) {
            if (h(i[d])) {
                if (!k(i[d], j[d]))return!1
            } else if (i[d] !== j[d])return!1;
            l[d] = !0
        }
        for (d in j)if (p.call(j, d) && !l[d])return!1;
        return!0
    }, o.duplicateQueryParameters = function (a) {
        return this._parts.duplicateQueryParameters = !!a, this
    }, o.escapeQuerySpace = function (a) {
        return this._parts.escapeQuerySpace = !!a, this
    }, e
});
var GridSampler = {};
GridSampler.checkAndNudgePoints = function (a, b) {
    for (var c = qrcode.width, d = qrcode.height, e = !0, f = 0; f < b.length && e; f += 2) {
        var g = Math.floor(b[f]), h = Math.floor(b[f + 1]);
        if (-1 > g || g > c || -1 > h || h > d)throw"Error.checkAndNudgePoints ";
        e = !1, -1 == g ? (b[f] = 0, e = !0) : g == c && (b[f] = c - 1, e = !0), -1 == h ? (b[f + 1] = 0, e = !0) : h == d && (b[f + 1] = d - 1, e = !0)
    }
    e = !0;
    for (var f = b.length - 2; f >= 0 && e; f -= 2) {
        var g = Math.floor(b[f]), h = Math.floor(b[f + 1]);
        if (-1 > g || g > c || -1 > h || h > d)throw"Error.checkAndNudgePoints ";
        e = !1, -1 == g ? (b[f] = 0, e = !0) : g == c && (b[f] = c - 1, e = !0), -1 == h ? (b[f + 1] = 0, e = !0) : h == d && (b[f + 1] = d - 1, e = !0)
    }
}, GridSampler.sampleGrid3 = function (a, b, c) {
    for (var d = new BitMatrix(b), e = new Array(b << 1), f = 0; b > f; f++) {
        for (var g = e.length, h = f + .5, i = 0; g > i; i += 2)e[i] = (i >> 1) + .5, e[i + 1] = h;
        c.transformPoints1(e), GridSampler.checkAndNudgePoints(a, e);
        try {
            for (var i = 0; g > i; i += 2) {
                var j = 4 * Math.floor(e[i]) + Math.floor(e[i + 1]) * qrcode.width * 4, k = a[Math.floor(e[i]) + qrcode.width * Math.floor(e[i + 1])];
                qrcode.imagedata.data[j] = k ? 255 : 0, qrcode.imagedata.data[j + 1] = k ? 255 : 0, qrcode.imagedata.data[j + 2] = 0, qrcode.imagedata.data[j + 3] = 255, k && d.set_Renamed(i >> 1, f)
            }
        } catch (l) {
            throw"Error.checkAndNudgePoints"
        }
    }
    return d
}, GridSampler.sampleGridx = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = PerspectiveTransform.quadrilateralToQuadrilateral(c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r);
    return GridSampler.sampleGrid3(a, b, s)
}, Version.VERSION_DECODE_INFO = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017), Version.VERSIONS = buildVersions(), Version.getVersionForNumber = function (a) {
    if (1 > a || a > 40)throw"ArgumentException";
    return Version.VERSIONS[a - 1]
}, Version.getProvisionalVersionForDimension = function (a) {
    if (a % 4 != 1)throw"Error getProvisionalVersionForDimension";
    try {
        return Version.getVersionForNumber(a - 17 >> 2)
    } catch (b) {
        throw"Error getVersionForNumber"
    }
}, Version.decodeVersionInformation = function (a) {
    for (var b = 4294967295, c = 0, d = 0; d < Version.VERSION_DECODE_INFO.length; d++) {
        var e = Version.VERSION_DECODE_INFO[d];
        if (e == a)return this.getVersionForNumber(d + 7);
        var f = FormatInformation.numBitsDiffering(a, e);
        b > f && (c = d + 7, b = f)
    }
    return 3 >= b ? this.getVersionForNumber(c) : null
}, PerspectiveTransform.quadrilateralToQuadrilateral = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = this.quadrilateralToSquare(a, b, c, d, e, f, g, h), r = this.squareToQuadrilateral(i, j, k, l, m, n, o, p);
    return r.times(q)
}, PerspectiveTransform.squareToQuadrilateral = function (a, b, c, d, e, f, g, h) {
    var i = h - f, j = b - d + f - h;
    if (0 == i && 0 == j)return new PerspectiveTransform(c - a, e - c, a, d - b, f - d, b, 0, 0, 1);
    var k = c - e, l = g - e, m = a - c + e - g, n = d - f, o = k * i - l * n, p = (m * i - l * j) / o, q = (k * j - m * n) / o;
    return new PerspectiveTransform(c - a + p * c, g - a + q * g, a, d - b + p * d, h - b + q * h, b, p, q, 1)
}, PerspectiveTransform.quadrilateralToSquare = function (a, b, c, d, e, f, g, h) {
    return this.squareToQuadrilateral(a, b, c, d, e, f, g, h).buildAdjoint()
};
var FORMAT_INFO_MASK_QR = 21522, FORMAT_INFO_DECODE_LOOKUP = new Array(new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31)), BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = function (a, b) {
    return a ^= b, BITS_SET_IN_HALF_BYTE[15 & a] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 4)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 8)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 12)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 16)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 20)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 24)] + BITS_SET_IN_HALF_BYTE[15 & URShift(a, 28)]
}, FormatInformation.decodeFormatInformation = function (a) {
    var b = FormatInformation.doDecodeFormatInformation(a);
    return null != b ? b : FormatInformation.doDecodeFormatInformation(a ^ FORMAT_INFO_MASK_QR)
}, FormatInformation.doDecodeFormatInformation = function (a) {
    for (var b = 4294967295, c = 0, d = 0; d < FORMAT_INFO_DECODE_LOOKUP.length; d++) {
        var e = FORMAT_INFO_DECODE_LOOKUP[d], f = e[0];
        if (f == a)return new FormatInformation(e[1]);
        var g = this.numBitsDiffering(a, f);
        b > g && (c = e[1], b = g)
    }
    return 3 >= b ? new FormatInformation(c) : null
}, ErrorCorrectionLevel.forBits = function (a) {
    if (0 > a || a >= FOR_BITS.length)throw"ArgumentException";
    return FOR_BITS[a]
};
var L = new ErrorCorrectionLevel(0, 1, "L"), M = new ErrorCorrectionLevel(1, 0, "M"), Q = new ErrorCorrectionLevel(2, 3, "Q"), H = new ErrorCorrectionLevel(3, 2, "H"), FOR_BITS = new Array(M, L, H, Q);
DataBlock.getDataBlocks = function (a, b, c) {
    if (a.length != b.TotalCodewords)throw"ArgumentException";
    for (var d = b.getECBlocksForLevel(c), e = 0, f = d.getECBlocks(), g = 0; g < f.length; g++)e += f[g].Count;
    for (var h = new Array(e), i = 0, j = 0; j < f.length; j++)for (var k = f[j], g = 0; g < k.Count; g++) {
        var l = k.DataCodewords, m = d.ECCodewordsPerBlock + l;
        h[i++] = new DataBlock(l, new Array(m))
    }
    for (var n = h[0].codewords.length, o = h.length - 1; o >= 0;) {
        var p = h[o].codewords.length;
        if (p == n)break;
        o--
    }
    o++;
    for (var q = n - d.ECCodewordsPerBlock, r = 0, g = 0; q > g; g++)for (var j = 0; i > j; j++)h[j].codewords[g] = a[r++];
    for (var j = o; i > j; j++)h[j].codewords[q] = a[r++];
    for (var s = h[0].codewords.length, g = q; s > g; g++)for (var j = 0; i > j; j++) {
        var t = o > j ? g : g + 1;
        h[j].codewords[t] = a[r++]
    }
    return h
};
var DataMask = {};
DataMask.forReference = function (a) {
    if (0 > a || a > 7)throw"System.ArgumentException";
    return DataMask.DATA_MASKS[a]
}, DataMask.DATA_MASKS = new Array(new DataMask000, new DataMask001, new DataMask010, new DataMask011, new DataMask100, new DataMask101, new DataMask110, new DataMask111), GF256.QR_CODE_FIELD = new GF256(285), GF256.DATA_MATRIX_FIELD = new GF256(301), GF256.addOrSubtract = function (a, b) {
    return a ^ b
};
var Decoder = {};
Decoder.rsDecoder = new ReedSolomonDecoder(GF256.QR_CODE_FIELD), Decoder.correctErrors = function (a, b) {
    for (var c = a.length, d = new Array(c), e = 0; c > e; e++)d[e] = 255 & a[e];
    var f = a.length - b;
    try {
        Decoder.rsDecoder.decode(d, f)
    } catch (g) {
        throw g
    }
    for (var e = 0; b > e; e++)a[e] = d[e]
}, Decoder.decode = function (a) {
    for (var b = new BitMatrixParser(a), c = b.readVersion(), d = b.readFormatInformation().ErrorCorrectionLevel, e = b.readCodewords(), f = DataBlock.getDataBlocks(e, c, d), g = 0, h = 0; h < f.length; h++)g += f[h].NumDataCodewords;
    for (var i = new Array(g), j = 0, k = 0; k < f.length; k++) {
        var l = f[k], m = l.Codewords, n = l.NumDataCodewords;
        Decoder.correctErrors(m, n);
        for (var h = 0; n > h; h++)i[j++] = m[h]
    }
    var o = new QRCodeDataBlockReader(i, c.VersionNumber, d.Bits);
    return o
};
var qrcode = {};
qrcode.imagedata = null, qrcode.width = 0, qrcode.height = 0, qrcode.qrCodeSymbol = null, qrcode.debug = !1, qrcode.sizeOfDataLengthInfo = [
    [10, 9, 8, 8],
    [12, 11, 16, 10],
    [14, 13, 16, 12]
], qrcode.callback = null, qrcode.decode = function (a) {
    if (0 == arguments.length) {
        var b = document.getElementById("qr-canvas"), c = b.getContext("2d");
        return qrcode.width = b.width, qrcode.height = b.height, qrcode.imagedata = c.getImageData(0, 0, qrcode.width, qrcode.height), qrcode.result = qrcode.process(c), null != qrcode.callback && qrcode.callback(qrcode.result), qrcode.result
    }
    var d = new Image;
    d.onload = function () {
        var a = document.createElement("canvas"), b = a.getContext("2d"), c = document.getElementById("out-canvas");
        if (null != c) {
            var e = c.getContext("2d");
            e.clearRect(0, 0, 320, 240), e.drawImage(d, 0, 0, 320, 240)
        }
        a.width = d.width, a.height = d.height, b.drawImage(d, 0, 0), qrcode.width = d.width, qrcode.height = d.height;
        try {
            qrcode.imagedata = b.getImageData(0, 0, d.width, d.height)
        } catch (f) {
            return qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!", null != qrcode.callback && qrcode.callback(qrcode.result), void 0
        }
        try {
            qrcode.result = qrcode.process(b)
        } catch (f) {
            console.log(f), qrcode.result = "error decoding QR Code"
        }
        null != qrcode.callback && qrcode.callback(qrcode.result)
    }, d.src = a
}, qrcode.decode_utf8 = function (a) {
    return decodeURIComponent(escape(a))
}, qrcode.process = function (a) {
    var b = ((new Date).getTime(), qrcode.grayScaleToBitmap(qrcode.grayscale()));
    if (qrcode.debug) {
        for (var c = 0; c < qrcode.height; c++)for (var d = 0; d < qrcode.width; d++) {
            var e = 4 * d + c * qrcode.width * 4;
            qrcode.imagedata.data[e] = b[d + c * qrcode.width] ? 0 : 0, qrcode.imagedata.data[e + 1] = b[d + c * qrcode.width] ? 0 : 0, qrcode.imagedata.data[e + 2] = b[d + c * qrcode.width] ? 255 : 0
        }
        a.putImageData(qrcode.imagedata, 0, 0)
    }
    var f = new Detector(b), g = f.detect();
    qrcode.debug && a.putImageData(qrcode.imagedata, 0, 0);
    for (var h = Decoder.decode(g.bits), i = h.DataByte, j = "", k = 0; k < i.length; k++)for (var l = 0; l < i[k].length; l++)j += String.fromCharCode(i[k][l]);
    (new Date).getTime();
    return qrcode.decode_utf8(j)
}, qrcode.getPixel = function (a, b) {
    if (qrcode.width < a)throw"point error";
    if (qrcode.height < b)throw"point error";
    var c = 4 * a + b * qrcode.width * 4, d = (33 * qrcode.imagedata.data[c] + 34 * qrcode.imagedata.data[c + 1] + 33 * qrcode.imagedata.data[c + 2]) / 100;
    return d
}, qrcode.binarize = function (a) {
    for (var b = new Array(qrcode.width * qrcode.height), c = 0; c < qrcode.height; c++)for (var d = 0; d < qrcode.width; d++) {
        var e = qrcode.getPixel(d, c);
        b[d + c * qrcode.width] = a >= e ? !0 : !1
    }
    return b
}, qrcode.getMiddleBrightnessPerArea = function (a) {
    for (var b = 4, c = Math.floor(qrcode.width / b), d = Math.floor(qrcode.height / b), e = new Array(b), f = 0; b > f; f++) {
        e[f] = new Array(b);
        for (var g = 0; b > g; g++)e[f][g] = new Array(0, 0)
    }
    for (var h = 0; b > h; h++)for (var i = 0; b > i; i++) {
        e[i][h][0] = 255;
        for (var j = 0; d > j; j++)for (var k = 0; c > k; k++) {
            var l = a[c * i + k + (d * h + j) * qrcode.width];
            l < e[i][h][0] && (e[i][h][0] = l), l > e[i][h][1] && (e[i][h][1] = l)
        }
    }
    for (var m = new Array(b), n = 0; b > n; n++)m[n] = new Array(b);
    for (var h = 0; b > h; h++)for (var i = 0; b > i; i++)m[i][h] = Math.floor((e[i][h][0] + e[i][h][1]) / 2);
    return m
}, qrcode.grayScaleToBitmap = function (a) {
    for (var b = qrcode.getMiddleBrightnessPerArea(a), c = b.length, d = Math.floor(qrcode.width / c), e = Math.floor(qrcode.height / c), f = new Array(qrcode.height * qrcode.width), g = 0; c > g; g++)for (var h = 0; c > h; h++)for (var i = 0; e > i; i++)for (var j = 0; d > j; j++)f[d * h + j + (e * g + i) * qrcode.width] = a[d * h + j + (e * g + i) * qrcode.width] < b[h][g] ? !0 : !1;
    return f
}, qrcode.grayscale = function () {
    for (var a = new Array(qrcode.width * qrcode.height), b = 0; b < qrcode.height; b++)for (var c = 0; c < qrcode.width; c++) {
        var d = qrcode.getPixel(c, b);
        a[c + b * qrcode.width] = d
    }
    return a
}, Array.prototype.remove = function (a, b) {
    var c = this.slice((b || a) + 1 || this.length);
    return this.length = 0 > a ? this.length + a : a, this.push.apply(this, c)
};
var MIN_SKIP = 3, MAX_MODULES = 57, INTEGER_MATH_SHIFT = 8, CENTER_QUORUM = 2;
qrcode.orderBestPatterns = function (a) {
    function b(a, b) {
        var c = a.X - b.X, d = a.Y - b.Y;
        return Math.sqrt(c * c + d * d)
    }

    function c(a, b, c) {
        var d = b.x, e = b.y;
        return(c.x - d) * (a.y - e) - (c.y - e) * (a.x - d)
    }

    var d, e, f, g = b(a[0], a[1]), h = b(a[1], a[2]), i = b(a[0], a[2]);
    if (h >= g && h >= i ? (e = a[0], d = a[1], f = a[2]) : i >= h && i >= g ? (e = a[1], d = a[0], f = a[2]) : (e = a[2], d = a[0], f = a[1]), c(d, e, f) < 0) {
        var j = d;
        d = f, f = j
    }
    a[0] = d, a[1] = e, a[2] = f
};

//          QR Drawing

var QRCode;
!function () {
    function a(a) {
        this.mode = j.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for (var b = 0, c = this.data.length; c > b; b++) {
            var d = [], e = this.data.charCodeAt(b);
            e > 65536 ? (d[0] = 240 | (1835008 & e) >>> 18, d[1] = 128 | (258048 & e) >>> 12, d[2] = 128 | (4032 & e) >>> 6, d[3] = 128 | 63 & e) : e > 2048 ? (d[0] = 224 | (61440 & e) >>> 12, d[1] = 128 | (4032 & e) >>> 6, d[2] = 128 | 63 & e) : e > 128 ? (d[0] = 192 | (1984 & e) >>> 6, d[1] = 128 | 63 & e) : d[0] = e, this.parsedData.push(d)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function b(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function c(a, b) {
        if (void 0 == a.length)throw new Error(a.length + "/" + b);
        for (var c = 0; c < a.length && 0 == a[c];)c++;
        this.num = new Array(a.length - c + b);
        for (var d = 0; d < a.length - c; d++)this.num[d] = a[d + c]
    }

    function d(a, b) {
        this.totalCount = a, this.dataCount = b
    }

    function e() {
        this.buffer = [], this.length = 0
    }

    function f() {
        return"undefined" != typeof CanvasRenderingContext2D
    }

    function g() {
        var a = !1, b = navigator.userAgent;
        return/android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a
    }

    function h(a, b) {
        for (var c = 1, d = i(a), e = 0, f = p.length; f >= e; e++) {
            var g = 0;
            switch (b) {
                case k.L:
                    g = p[e][0];
                    break;
                case k.M:
                    g = p[e][1];
                    break;
                case k.Q:
                    g = p[e][2];
                    break;
                case k.H:
                    g = p[e][3]
            }
            if (g >= d)break;
            c++
        }
        if (c > p.length)throw new Error("Too long data");
        return c
    }

    function i(a) {
        var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return b.length + (b.length != a ? 3 : 0)
    }

    a.prototype = {getLength: function () {
        return this.parsedData.length
    }, write: function (a) {
        for (var b = 0, c = this.parsedData.length; c > b; b++)a.put(this.parsedData[b], 8)
    }}, b.prototype = {addData: function (b) {
        var c = new a(b);
        this.dataList.push(c), this.dataCache = null
    }, isDark: function (a, b) {
        if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b)throw new Error(a + "," + b);
        return this.modules[a][b]
    }, getModuleCount: function () {
        return this.moduleCount
    }, make: function () {
        this.makeImpl(!1, this.getBestMaskPattern())
    }, makeImpl: function (a, c) {
        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
        for (var d = 0; d < this.moduleCount; d++) {
            this.modules[d] = new Array(this.moduleCount);
            for (var e = 0; e < this.moduleCount; e++)this.modules[d][e] = null
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c)
    }, setupPositionProbePattern: function (a, b) {
        for (var c = -1; 7 >= c; c++)if (!(-1 >= a + c || this.moduleCount <= a + c))for (var d = -1; 7 >= d; d++)-1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
    }, getBestMaskPattern: function () {
        for (var a = 0, b = 0, c = 0; 8 > c; c++) {
            this.makeImpl(!0, c);
            var d = m.getLostPoint(this);
            (0 == c || a > d) && (a = d, b = c)
        }
        return b
    }, createMovieClip: function (a, b, c) {
        var d = a.createEmptyMovieClip(b, c), e = 1;
        this.make();
        for (var f = 0; f < this.modules.length; f++)for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
            var i = h * e, j = this.modules[f][h];
            j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
        }
        return d
    }, setupTimingPattern: function () {
        for (var a = 8; a < this.moduleCount - 8; a++)null == this.modules[a][6] && (this.modules[a][6] = a % 2 == 0);
        for (var b = 8; b < this.moduleCount - 8; b++)null == this.modules[6][b] && (this.modules[6][b] = b % 2 == 0)
    }, setupPositionAdjustPattern: function () {
        for (var a = m.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)for (var c = 0; c < a.length; c++) {
            var d = a[b], e = a[c];
            if (null == this.modules[d][e])for (var f = -2; 2 >= f; f++)for (var g = -2; 2 >= g; g++)this.modules[d + f][e + g] = -2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? !0 : !1
        }
    }, setupTypeNumber: function (a) {
        for (var b = m.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
            var d = !a && 1 == (b >> c & 1);
            this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
        }
        for (var c = 0; 18 > c; c++) {
            var d = !a && 1 == (b >> c & 1);
            this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
        }
    }, setupTypeInfo: function (a, b) {
        for (var c = this.errorCorrectLevel << 3 | b, d = m.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
            var f = !a && 1 == (d >> e & 1);
            6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f : this.modules[this.moduleCount - 15 + e][8] = f
        }
        for (var e = 0; 15 > e; e++) {
            var f = !a && 1 == (d >> e & 1);
            8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f
        }
        this.modules[this.moduleCount - 8][8] = !a
    }, mapData: function (a, b) {
        for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)for (6 == g && g--; ;) {
            for (var h = 0; 2 > h; h++)if (null == this.modules[d][g - h]) {
                var i = !1;
                f < a.length && (i = 1 == (a[f] >>> e & 1));
                var j = m.getMask(b, d, g - h);
                j && (i = !i), this.modules[d][g - h] = i, e--, -1 == e && (f++, e = 7)
            }
            if (d += c, 0 > d || this.moduleCount <= d) {
                d -= c, c = -c;
                break
            }
        }
    }}, b.PAD0 = 236, b.PAD1 = 17, b.createData = function (a, c, f) {
        for (var g = d.getRSBlocks(a, c), h = new e, i = 0; i < f.length; i++) {
            var j = f[i];
            h.put(j.mode, 4), h.put(j.getLength(), m.getLengthInBits(j.mode, a)), j.write(h)
        }
        for (var k = 0, i = 0; i < g.length; i++)k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k)throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");
        for (h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); h.getLengthInBits() % 8 != 0;)h.putBit(!1);
        for (; ;) {
            if (h.getLengthInBits() >= 8 * k)break;
            if (h.put(b.PAD0, 8), h.getLengthInBits() >= 8 * k)break;
            h.put(b.PAD1, 8)
        }
        return b.createBytes(h, g)
    }, b.createBytes = function (a, b) {
        for (var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++) {
            var j = b[i].dataCount, k = b[i].totalCount - j;
            e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);
            for (var l = 0; l < g[i].length; l++)g[i][l] = 255 & a.buffer[l + d];
            d += j;
            var n = m.getErrorCorrectPolynomial(k), o = new c(g[i], n.getLength() - 1), p = o.mod(n);
            h[i] = new Array(n.getLength() - 1);
            for (var l = 0; l < h[i].length; l++) {
                var q = l + p.getLength() - h[i].length;
                h[i][l] = q >= 0 ? p.get(q) : 0
            }
        }
        for (var r = 0, l = 0; l < b.length; l++)r += b[l].totalCount;
        for (var s = new Array(r), t = 0, l = 0; e > l; l++)for (var i = 0; i < b.length; i++)l < g[i].length && (s[t++] = g[i][l]);
        for (var l = 0; f > l; l++)for (var i = 0; i < b.length; i++)l < h[i].length && (s[t++] = h[i][l]);
        return s
    };
    for (var j = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, k = {L: 1, M: 0, Q: 3, H: 2}, l = {PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7}, m = {PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
    ], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function (a) {
        for (var b = a << 10; m.getBCHDigit(b) - m.getBCHDigit(m.G15) >= 0;)b ^= m.G15 << m.getBCHDigit(b) - m.getBCHDigit(m.G15);
        return(a << 10 | b) ^ m.G15_MASK
    }, getBCHTypeNumber: function (a) {
        for (var b = a << 12; m.getBCHDigit(b) - m.getBCHDigit(m.G18) >= 0;)b ^= m.G18 << m.getBCHDigit(b) - m.getBCHDigit(m.G18);
        return a << 12 | b
    }, getBCHDigit: function (a) {
        for (var b = 0; 0 != a;)b++, a >>>= 1;
        return b
    }, getPatternPosition: function (a) {
        return m.PATTERN_POSITION_TABLE[a - 1]
    }, getMask: function (a, b, c) {
        switch (a) {
            case l.PATTERN000:
                return(b + c) % 2 == 0;
            case l.PATTERN001:
                return b % 2 == 0;
            case l.PATTERN010:
                return c % 3 == 0;
            case l.PATTERN011:
                return(b + c) % 3 == 0;
            case l.PATTERN100:
                return(Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
            case l.PATTERN101:
                return b * c % 2 + b * c % 3 == 0;
            case l.PATTERN110:
                return(b * c % 2 + b * c % 3) % 2 == 0;
            case l.PATTERN111:
                return(b * c % 3 + (b + c) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + a)
        }
    }, getErrorCorrectPolynomial: function (a) {
        for (var b = new c([1], 0), d = 0; a > d; d++)b = b.multiply(new c([1, n.gexp(d)], 0));
        return b
    }, getLengthInBits: function (a, b) {
        if (b >= 1 && 10 > b)switch (a) {
            case j.MODE_NUMBER:
                return 10;
            case j.MODE_ALPHA_NUM:
                return 9;
            case j.MODE_8BIT_BYTE:
                return 8;
            case j.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + a)
        } else if (27 > b)switch (a) {
            case j.MODE_NUMBER:
                return 12;
            case j.MODE_ALPHA_NUM:
                return 11;
            case j.MODE_8BIT_BYTE:
                return 16;
            case j.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + a)
        } else {
            if (!(41 > b))throw new Error("type:" + b);
            switch (a) {
                case j.MODE_NUMBER:
                    return 14;
                case j.MODE_ALPHA_NUM:
                    return 13;
                case j.MODE_8BIT_BYTE:
                    return 16;
                case j.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + a)
            }
        }
    }, getLostPoint: function (a) {
        for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)for (var e = 0; b > e; e++) {
            for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)if (!(0 > d + h || d + h >= b))for (var i = -1; 1 >= i; i++)0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
            f > 5 && (c += 3 + f - 5)
        }
        for (var d = 0; b - 1 > d; d++)for (var e = 0; b - 1 > e; e++) {
            var j = 0;
            a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
        }
        for (var d = 0; b > d; d++)for (var e = 0; b - 6 > e; e++)a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
        for (var e = 0; b > e; e++)for (var d = 0; b - 6 > d; d++)a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
        for (var k = 0, e = 0; b > e; e++)for (var d = 0; b > d; d++)a.isDark(d, e) && k++;
        var l = Math.abs(100 * k / b / b - 50) / 5;
        return c += 10 * l
    }}, n = {glog: function (a) {
        if (1 > a)throw new Error("glog(" + a + ")");
        return n.LOG_TABLE[a]
    }, gexp: function (a) {
        for (; 0 > a;)a += 255;
        for (; a >= 256;)a -= 255;
        return n.EXP_TABLE[a]
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)}, o = 0; 8 > o; o++)n.EXP_TABLE[o] = 1 << o;
    for (var o = 8; 256 > o; o++)n.EXP_TABLE[o] = n.EXP_TABLE[o - 4] ^ n.EXP_TABLE[o - 5] ^ n.EXP_TABLE[o - 6] ^ n.EXP_TABLE[o - 8];
    for (var o = 0; 255 > o; o++)n.LOG_TABLE[n.EXP_TABLE[o]] = o;
    c.prototype = {get: function (a) {
        return this.num[a]
    }, getLength: function () {
        return this.num.length
    }, multiply: function (a) {
        for (var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)for (var e = 0; e < a.getLength(); e++)b[d + e] ^= n.gexp(n.glog(this.get(d)) + n.glog(a.get(e)));
        return new c(b, 0)
    }, mod: function (a) {
        if (this.getLength() - a.getLength() < 0)return this;
        for (var b = n.glog(this.get(0)) - n.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++)d[e] = this.get(e);
        for (var e = 0; e < a.getLength(); e++)d[e] ^= n.gexp(n.glog(a.get(e)) + b);
        return new c(d, 0).mod(a)
    }}, d.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], d.getRSBlocks = function (a, b) {
        var c = d.getRsBlockTable(a, b);
        if (void 0 == c)throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var e = c.length / 3, f = [], g = 0; e > g; g++)for (var h = c[3 * g + 0], i = c[3 * g + 1], j = c[3 * g + 2], k = 0; h > k; k++)f.push(new d(i, j));
        return f
    }, d.getRsBlockTable = function (a, b) {
        switch (b) {
            case k.L:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case k.M:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case k.Q:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case k.H:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0
        }
    }, e.prototype = {get: function (a) {
        var b = Math.floor(a / 8);
        return 1 == (this.buffer[b] >>> 7 - a % 8 & 1)
    }, put: function (a, b) {
        for (var c = 0; b > c; c++)this.putBit(1 == (a >>> b - c - 1 & 1))
    }, getLengthInBits: function () {
        return this.length
    }, putBit: function (a) {
        var b = Math.floor(this.length / 8);
        this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
    }};
    var p = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273]
    ], q = function () {
        var a = function (a, b) {
            this._el = a, this._htOption = b
        };
        return a.prototype.draw = function (a) {
            function b(a, b) {
                var c = document.createElementNS("http://www.w3.org/2000/svg", a);
                for (var d in b)b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
                return c
            }

            {
                var c = this._htOption, d = this._el, e = a.getModuleCount();
                Math.floor(c.width / e), Math.floor(c.height / e)
            }
            this.clear();
            var f = b("svg", {viewBox: "0 0 " + String(e) + " " + String(e), width: "100%", height: "100%", fill: c.colorLight});
            f.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), d.appendChild(f), f.appendChild(b("rect", {fill: c.colorDark, width: "1", height: "1", id: "template"}));
            for (var g = 0; e > g; g++)for (var h = 0; e > h; h++)if (a.isDark(g, h)) {
                var i = b("use", {x: String(g), y: String(h)});
                i.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), f.appendChild(i)
            }
        }, a.prototype.clear = function () {
            for (; this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)
        }, a
    }(), r = "svg" === document.documentElement.tagName.toLowerCase(), s = r ? q : f() ? function () {
        function a() {
            this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
        }

        function b(a, b) {
            var c = this;
            if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                var d = document.createElement("img"), e = function () {
                    c._bSupportDataURI = !1, c._fFail && _fFail.call(c)
                }, f = function () {
                    c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c)
                };
                return d.onabort = e, d.onerror = e, d.onload = f, d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0
            }
            c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c)
        }

        if (this && this._android && this._android <= 2.1) {
            var c = 1 / window.devicePixelRatio, d = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function (a, b, e, f, g, h, i, j) {
                if ("nodeName"in a && /img/i.test(a.nodeName))for (var k = arguments.length - 1; k >= 1; k--)arguments[k] = arguments[k] * c; else"undefined" == typeof j && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
                d.apply(this, arguments)
            }
        }
        var e = function (a, b) {
            this._bIsPainted = !1, this._android = g(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
        };
        return e.prototype.draw = function (a) {
            var b = this._elImage, c = this._oContext, d = this._htOption, e = a.getModuleCount(), f = d.width / e, g = d.height / e, h = Math.round(f), i = Math.round(g);
            b.style.display = "none", this.clear();
            for (var j = 0; e > j; j++)for (var k = 0; e > k; k++) {
                var l = a.isDark(j, k), m = k * f, n = j * g;
                c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i)
            }
            this._bIsPainted = !0
        }, e.prototype.makeImage = function () {
            this._bIsPainted && b.call(this, a)
        }, e.prototype.isPainted = function () {
            return this._bIsPainted
        }, e.prototype.clear = function () {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
        }, e.prototype.round = function (a) {
            return a ? Math.floor(1e3 * a) / 1e3 : a
        }, e
    }() : function () {
        var a = function (a, b) {
            this._el = a, this._htOption = b
        };
        return a.prototype.draw = function (a) {
            for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
                g.push("<tr>");
                for (var i = 0; d > i; i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
                g.push("</tr>")
            }
            g.push("</table>"), c.innerHTML = g.join("");
            var j = c.childNodes[0], k = (b.width - j.offsetWidth) / 2, l = (b.height - j.offsetHeight) / 2;
            k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
        }, a.prototype.clear = function () {
            this._el.innerHTML = ""
        }, a
    }();
    QRCode = function (a, b) {
        if (this._htOption = {width: 300, height: 300, typeNumber: 4, colorDark: "#000000", colorLight: "#ffffff", correctLevel: k.H}, "string" == typeof b && (b = {text: b}), b)for (var c in b)this._htOption[c] = b[c];
        "string" == typeof a && (a = document.getElementById(a)), this._android = g(), this._el = a, this._oQRCode = null, this._oDrawing = new s(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function (a) {
        this._oQRCode = new b(h(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = k
}();

//          Coinpunk

var coinpunk = {};

$.ajax("../config.json", {async: !1, complete: function (a) {
    coinpunk.config = a.responseJSON
}}), coinpunk.utils = {}, coinpunk.utils.stripTags = function (a) {
    return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}, coinpunk.Template = {preCache: ["accounts/import", "accounts/settings", "addresses/list", "addresses/request", "dashboard/received", "dashboard/sent", "tx/details", "tx/send", "backup", "dashboard", "header", "node_error", "signin", "signup", "buy", "main", "footer"], templateCache: {}, get: function (a, b) {
    var c = this;
    $.get("templates/" + a + ".html", function (d) {
        c.templateCache[a] = d, b && b(d)
    })
}, draw: function (a, b, c, d) {
    var e = this;
    this.templateCache[b] ? this.parseTemplate(a, this.templateCache[b], c, d) : this.get(b, function (b) {
       e.parseTemplate(a, b, c, d)
    })
}, parseTemplate: function (a, b, c, d) {
    $("#" + a).html(_.template(b, c, {variable: "data"})), d && d(a)
}, loadPreCache: function () {
    for (var a = 0; a < this.preCache.length; a++)this.get(this.preCache[a])
}}, coinpunk.Template.loadPreCache(), coinpunk.Database = function () {
    this.coinpunkCurrencyName = "coinpunkCurrency", this.storage = localStorage
}, coinpunk.Database.prototype.setCurrency = function (a) {
    return localStorage.setItem(this.coinpunkCurrencyName, a)
}, coinpunk.Database.prototype.getCurrency = function () {
    return localStorage.getItem(this.coinpunkCurrencyName)
}, coinpunk.Database.prototype.setSuccessMessage = function (a) {
    return localStorage.setItem("successMessage", a)
}, coinpunk.Database.prototype.getSuccessMessage = function () {
    var a = localStorage.getItem("successMessage");
    return localStorage.removeItem("successMessage"), a
}, coinpunk.database = new coinpunk.Database, coinpunk.Wallet = function (a, b) {
    this.network = coinpunk.config.network || "prod", this.walletKey = a, this.walletId = b, this.defaultIterations = 1e3, this.serverKey = void 0, this.transactions = [], this.unspent = [], this.minimumConfirmations = 1, this.unspentConfirmations = [];
    var c = [];
    this.loadPayloadWithLogin = function (a, b, c) {
        return this.createWalletKey(a, b), this.loadPayload(c), !0
    }, this.loadPayload = function (a) {
        var b = sjcl.decrypt(this.walletKey, a);
        this.payloadHash = this.computePayloadHash(b);
        var d = JSON.parse(b);
        return c = d.keyPairs, this.transactions = d.transactions || [], this.unspent = d.unspent || [], !0
    }, this.mergePayload = function (a) {
        var b = sjcl.decrypt(this.walletKey, a), d = JSON.parse(b);
        return c = _.uniq(_.union(d.keyPairs, c), !1, function (a) {
            return a.key
        }), this.transactions = _.uniq(_.union(d.transactions, this.transactions), !1, function (a) {
            return a.hash
        }), this.unspent = _.uniq(_.union(d.unspent, this.unspent), !1, function (a) {
            return a.hash
        }), this.payloadHash = this.computePayloadHash(b), !0
    }, this.createNewAddress = function (a, b) {
        var d = new Bitcoin.ECKey, e = {key: d.getExportedPrivateKey(this.network), publicKey: Bitcoin.convert.bytesToHex(d.getPubKeyHash()), address: d.getBitcoinAddress(this.network).toString(), isChange: 1 == b};
        return a && (e.name = a), c.push(e), e.address
    }, this.removeAddress = function (a) {
        var b = 0;
        for (b = 0; b < c.length; b++)c[b].address == a && c.splice(b, 1)
    }, this.getAddressName = function (a) {
        for (var b = 0; b < c.length; b++)if (c[b].address == a)return c[b].name
    }, this.addresses = function () {
        for (var a = [], b = 0; b < c.length; b++)a.push({address: c[b].address, name: c[b].name, isChange: c[b].isChange});
        return a
    }, this.receiveAddresses = function () {
        for (var a = [], b = 0; b < c.length; b++)1 != c[b].isChange && a.push({address: c[b].address, name: c[b].name});
        return a
    }, this.receiveAddressHashes = function () {
        for (var a = [], b = 0; b < c.length; b++)1 != c[b].isChange && a.push(c[b].address);
        return a
    }, this.changeAddressHashes = function () {
        for (var a = [], b = 0; b < c.length; b++)1 == c[b].isChange && a.push(c[b].address);
        return a
    }, this.addressHashes = function () {
        for (var a = this.addresses(), b = [], c = 0; c < a.length; c++)b.push(a[c].address);
        return b
    }, this.createServerKey = function () {
        return this.serverKey = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(this.walletKey, this.walletId, this.defaultIterations)), this.serverKey
    }, this.createWalletKey = function (a, b) {
        return this.walletKey = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(b, a, this.defaultIterations)), this.walletId = a, this.createServerKey(), this.walletKey
    }, this.computePayloadHash = function (a) {
        return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(a))
    }, this.encryptPayload = function () {
        var a = {keyPairs: c, transactions: this.transactions, unspent: this.unspent}, b = JSON.stringify(a);
        return this.newPayloadHash = this.computePayloadHash(b), sjcl.encrypt(this.walletKey, b)
    }, this.mergeUnspent = function (a) {
        var b = !1;
        this.unspentConfirmations = this.unspentConfirmations || {};
        for (var c = 0; c < a.length; c++) {
            for (var d = !1, e = 0; e < this.unspent.length; e++)this.unspent[e].hash == a[c].hash && (d = !0);
            if (this.unspentConfirmations[a[c].hash] = a[c].confirmations, 1 != d) {
                b = !0, this.unspent.push({hash: a[c].hash, vout: a[c].vout, address: a[c].address, scriptPubKey: a[c].scriptPubKey, amount: a[c].amount});
                for (var f = !1, g = 0; g < this.transactions.length; g++)this.transactions[g].hash == a[c].hash && (f = !0);
                0 == f && this.transactions.push({hash: a[c].hash, type: "receive", address: a[c].address, amount: a[c].amount, time: (new Date).getTime()})
            }
        }
        return b
    }, this.getUnspent = function (a) {
        for (var a = a || 0, b = [], c = 0; c < this.unspent.length; c++)this.unspentConfirmations[this.unspent[c].hash] >= a && b.push(this.unspent[c]);
        return b
    }, this.pendingUnspentBalance = function () {
        for (var a = this.getUnspent(0), b = this.changeAddressHashes(), c = new BigNumber(0), d = 0; d < a.length; d++)0 == this.unspentConfirmations[a[d].hash] && 0 == _.contains(b, a[d].address) && (c = c.plus(a[d].amount));
        return c
    }, this.safeUnspentBalance = function () {
        for (var a = this.safeUnspent(), b = new BigNumber(0), c = 0; c < a.length; c++)b = b.plus(a[c].amount);
        return b
    }, this.safeUnspent = function () {
        for (var a = this.getUnspent(), b = this.changeAddressHashes(), c = [], d = 0; d < a.length; d++)(1 == _.contains(b, a[d].address) || this.unspentConfirmations[a[d].hash] >= this.minimumConfirmations) && c.push(a[d]);
        return c
    }, this.receivedAmountTotal = function () {
        for (var a = this.addresses(), b = new BigNumber(0), c = 0; c < a.length; c++)b = b.plus(this.addressReceivedAmount(a[c]));
        return b
    }, this.addressReceivedAmount = function (a) {
        for (var b = new BigNumber(0), c = 0; c < this.transactions.length; c++)this.transactions[c].address == a && (b = b.plus(this.transactions[c].amount));
        return b
    }, this.createTx = function (a, b, d, e) {
        var f = Bitcoin.util.parseValue(a);
        if (f == Bitcoin.BigInteger.ZERO)throw"spend amount must be greater than zero";
        if (!e)throw"change address was not provided";
        var g, h = Bitcoin.util.parseValue(b || "0"), i = Bitcoin.BigInteger.ZERO.add(f).add(h), j = new Bitcoin.Address(d, this.network), k = new Bitcoin.Transaction, l = [], m = Bitcoin.BigInteger.ZERO, n = this.safeUnspent();
        for (g = 0; g < n.length; g++) {
            l.push(n[g]);
            var o = new BigNumber(n[g].amount).times(Math.pow(10, 8)).toString();
            if (m = m.add(new Bitcoin.BigInteger(o)), m.compareTo(i) > -1)break
        }
        if (m.compareTo(i) < 0)throw"you do not have enough bitcoins to send this amount";
        for (g = 0; g < l.length; g++)k.addInput({hash: l[g].hash}, l[g].vout);
        k.addOutput(j, f);
        var p = m.subtract(i);
        p.equals(Bitcoin.BigInteger.ZERO) || k.addOutput(e, p);
        var q = 1;
        for (g = 0; g < l.length; g++)for (var r = new Bitcoin.Script(Bitcoin.convert.hexToBytes(l[g].scriptPubKey)), s = k.hashTransactionForSignature(r, g, q), t = r.simpleOutHash(), u = Bitcoin.convert.bytesToHex(t), v = 0; v < c.length; v++)if (_.isEqual(c[v].publicKey, u)) {
            var w = new Bitcoin.Key(c[v].key), x = w.sign(s);
            x.push(parseInt(q, 10)), k.ins[g].script = Bitcoin.Script.createInputScript(x, w.getPub());
            break
        }
        return{unspentsUsed: l, obj: k, raw: Bitcoin.convert.bytesToHex(k.serialize())}
    }, this.calculateFee = function (a, b, c) {
        var d = this.createTx(a, 0, b, c), e = d.raw.length / 2;
        return 1e-4 * Math.ceil(e / 1e3)
    }, this.createSend = function (a, b, c, d) {
        var e = this.createTx(a, b, c, d);
        this.transactions.push({hash: Bitcoin.convert.bytesToHex(e.obj.getHash()), type: "send", address: c, amount: a, fee: b, time: (new Date).getTime()});
        for (var f = 0; f < e.unspentsUsed.length; f++)this.unspent = _.reject(this.unspentsUsed, function (a) {
            return a.hash == e.unspentsUsed[f].hash
        });
        return this.lastUnspentsUsed = e.unspentsUsed, e.raw
    }, this.revertTx = function () {
        var a = 0;
        for (this.transactions.pop(), a = 0; a < this.lastUnspentsUsed.length; a++)this.unspent.push(this.lastUnspentsUsed[a])
    }, a && b && this.createServerKey()
}, coinpunk.Controller = function () {
}, coinpunk.Controller.prototype.getUnspent = function (a, b) {
    var c = this, d = {addresses: coinpunk.wallet.addressHashes()};
    "function" == typeof a ? b = a : d.confirmations = a, $.post("/api/tx/unspent", d, function (a) {
        return a.error ? (coinpunk.router.route("node_error"), void 0) : (c.mergeUnspent(a.unspent, b), void 0)
    })
}, coinpunk.Controller.prototype.mergeUnspent = function (a, b) {
    1 == coinpunk.wallet.mergeUnspent(a) ? this.saveWallet({override: !0}, b) : b()
}, coinpunk.Controller.prototype.saveWallet = function (a, b) {
    var c = this, a = a || {};
    a.serverKey = coinpunk.wallet.serverKey, coinpunk.wallet.sessionKey && (a.sessionKey = coinpunk.wallet.sessionKey), a.payload || (a.payload = {}), a.payload.wallet || (a.payload.wallet = coinpunk.wallet.encryptPayload()), a.payload.originalPayloadHash = coinpunk.wallet.payloadHash, a.payload.newPayloadHash = coinpunk.wallet.newPayloadHash, $.ajax({type: "POST", url: "/api/wallet", data: a, dataType: "json", success: function (a) {
        return"outOfSync" == a.result ? (coinpunk.wallet.mergePayload(a.wallet), c.saveWallet({override: !0}, b)) : (coinpunk.wallet.payloadHash = coinpunk.wallet.newPayloadHash, b && b(a), void 0)
    }})
}, coinpunk.Controller.prototype.deleteWallet = function (a, b) {
    $.ajax({type: "POST", url: "/api/wallet/delete", data: {serverKey: a}, dataType: "json", success: function (a) {
        b && b(a)
    }})
}, coinpunk.Controller.prototype.render = function (a, b, c) {
    this.template("header", "header"), this.template("view", a, b, c), this.template("sidebar", "sidebar")
}, coinpunk.Controller.prototype.template = function (a, b, c, d) {
    coinpunk.Template.draw(a, b, c, d)
}, coinpunk.Controller.prototype.friendlyTimeString = function (a) {
    var b = new Date(a);
    return b.toLocaleString()
}, coinpunk.Controller.prototype.updateExchangeRates = function (a) {
    coinpunk.pricing.getLatest(function (b, c) {
        $("#balanceExchange").text(" ≈ " + parseFloat(b * $("#balance").text()).toFixed(2)), $("#exchangePrice").text("1 BTC ≈ " + b + " " + c), $("#" + a + " .exchangePrice").remove();
        for (var d = $("#" + a + " .addExchangePrice"), e = 0; e < d.length; e++)$(d[e]).append('<span class="exchangePrice"><small>' + ($(d[e]).text().trim().split(" ")[0] * b).toFixed(2) + " " + c + "</small></span>")
    })
}, coinpunk.Controller.prototype.minimumSendConfirmations = 1, coinpunk.Controller.prototype.minimumStrongSendConfirmations = 6, coinpunk.controllers = {}, coinpunk.controllers.Accounts = function () {
}, coinpunk.controllers.Accounts.prototype = new coinpunk.Controller, coinpunk.controllers.Accounts.prototype.requiredPasswordLength = 10, coinpunk.controllers.Accounts.prototype.passwordStrength = {enabled: !1, enable: function () {
    this.enabled !== !0 && (this.enabled = !0, $.strength("#email", "#password", function (a, b, c) {
        $("#progressBar").css("width", c.score + "%");
        var d = c.status.charAt(0).toUpperCase() + c.status.slice(1);
        $("#passwordStrengthStatus").text(d)
    }))
}}, coinpunk.controllers.Accounts.prototype.signin = function () {
    var a = $("#walletId").val(), b = $("#password").val(), c = $("#errors");
    c.addClass("hidden"), c.html("");
    var d = new coinpunk.Wallet, e = (d.createWalletKey(a, b), d.encryptPayload(), {serverKey: d.serverKey}), f = $("#authCode");
    f && (e.authCode = f.val()), $.get("/api/wallet", e, function (a) {
        "error" == a.result ? (c.removeClass("hidden"), c.text(a.message)) : "authCodeNeeded" == a.result ? (c.removeClass("hidden"), c.text(a.message), $("#signinPassword").after('\n        <div class="form-group">\n          <label for="authCode" class="col-lg-2 control-label">Auth Code</label>\n          <div class="col-lg-4">\n            <input id="authCode" type="password" class="form-control" placeholder="">\n          </div>\n        </div>\n      '), $("#authCode").focus(), coinpunk.usingAuthKey = !0) : (c.addClass("hidden"), d.loadPayload(a.wallet), d.sessionKey = a.sessionKey, coinpunk.wallet = d, coinpunk.router.listener(), coinpunk.router.route("dashboard"))
    })
}, coinpunk.controllers.Accounts.prototype.disableSubmitButton = function () {
    var a = $("#createAccountButton");
    a.attr("disabled", "disabled"), a.removeClass("btn-success"), a.text("Creating account, please wait..")
}, coinpunk.controllers.Accounts.prototype.enableSubmitButton = function () {
    var a = $("#createAccountButton");
    a.removeAttr("disabled"), a.addClass("btn-success"), a.html('<i class="fa fa-user"></i> Create Account')
}, coinpunk.controllers.Accounts.prototype.create = function () {
    var a = this, b = $("#email").val(), c = $("#password").val(), d = $("#password_confirm").val(), e = [];
    null === /.+@.+\..+/.exec(b) && e.push("Email is not valid."), "" === c && e.push("Password cannot be blank."), c != d && e.push("Passwords do not match."), c.length < this.requiredPasswordLength && e.push("Password must be at least 10 characters.");
    var f = $("#errors");
    if (e.length > 0) {
        f.html("");
        for (var g = 0; g < e.length; g++)f.html(f.html() + coinpunk.utils.stripTags(e[g]) + "<br>");
        $("#errors").removeClass("hidden")
    } else {
        $("#errors").addClass("hidden"), this.disableSubmitButton();
        {
            var h = new coinpunk.Wallet, i = h.createNewAddress("Default");
            h.createWalletKey(b, c)
        }
        coinpunk.wallet = h, this.saveWallet({address: i, payload: {email: b}}, function (b) {
            if ("ok" == b.result)coinpunk.wallet.sessionKey = b.sessionKey, coinpunk.router.listener(), coinpunk.router.route("dashboard"); else if ("exists" == b.result)delete coinpunk.wallet, f.html('Wallet already exists, perhaps you want to <a href="#/signin">sign in</a> instead?'), f.removeClass("hidden"), a.enableSubmitButton(); else {
                f.html("");
                for (var c = 0; c < b.messages.length; c++)f.html(f.html() + coinpunk.utils.stripTags(b.messages[c]) + "<br>");
                $("#errors").removeClass("hidden"), a.enableSubmitButton()
            }
        })
    }
}, coinpunk.controllers.Accounts.prototype.performImport = function (a, b) {
    var c = $("#importButton");
    c.attr("disabled", "disabled");
    var a = $("#importId").val(), b = $("#importPassword").val(), d = $("#importFile").get(0).files[0], e = this, f = new FileReader;
    f.onload = function (d) {
        var f = new coinpunk.Wallet;
        try {
            f.loadPayloadWithLogin(a, b, d.target.result)
        } catch (g) {
            return $("#importErrorDialog").removeClass("hidden"), $("#importErrorMessage").text("Wallet import failed. Check the credentials and wallet file."), c.removeAttr("disabled"), void 0
        }
        if (f.transactions && f.addresses()) {
            {
                f.encryptPayload()
            }
            coinpunk.wallet = f, e.saveWallet({importAddresses: coinpunk.wallet.addressHashes()}, function (a) {
                if ("exists" == a.result)return $("#importErrorDialog").removeClass("hidden"), $("#importErrorMessage").text("Cannot import your wallet, because the wallet already exists on this server."), c.removeAttr("disabled"), void 0;
                var b = "Wallet import successful! There will be a delay in viewing your transactions until the server finishes scanning for unspent transactions on your addresses. Please be patient.";
                coinpunk.database.setSuccessMessage(b), coinpunk.router.route("dashboard")
            })
        } else $("#importErrorDialog").removeClass("hidden"), $("#importErrorMessage").text("Not a valid wallet backup file."), c.removeAttr("disabled")
    };
    try {
        f.readAsText(d)
    } catch (g) {
        $("#importErrorDialog").removeClass("hidden"), $("#importErrorMessage").text("You must provide a wallet backup file."), c.removeAttr("disabled")
    }
}, coinpunk.controllers.Accounts.prototype.changeId = function () {
    var a = $("#changeEmailNew"), b = $("#changeEmailPassword"), c = a.val(), d = b.val(), e = this;
    if (null === /.+@.+\..+/.exec(c))return e.changeDialog("danger", "Email is not valid."), void 0;
    var f = coinpunk.wallet.walletId, g = coinpunk.wallet.serverKey, h = (coinpunk.wallet.payloadHash, new coinpunk.Wallet);
    if (h.createWalletKey(f, d), h.serverKey != coinpunk.wallet.serverKey)return e.changeDialog("danger", "The provided password does not match. Please try again."), void 0;
    coinpunk.wallet.createWalletKey(c, d);
    var i = {originalServerKey: g, wallet: coinpunk.wallet.encryptPayload(), serverKey: coinpunk.wallet.serverKey, email: c, payloadHash: coinpunk.wallet.payloadHash};
    coinpunk.wallet.sessionKey && (i.sessionKey = coinpunk.wallet.sessionKey), $.post("api/change", i, function (c) {
        return"ok" != c.result ? e.changeDialog("danger", "An unknown error has occured, please try again later.") : (e.template("header", "header"), a.val(""), b.val(""), e.changeDialog("success", "Successfully changed email. You will need to use this to login next time, don't forget it!"), void 0)
    })
}, coinpunk.controllers.Accounts.prototype.changePassword = function () {
    var a = this, b = $("#currentPassword"), c = $("#newPassword"), d = $("#confirmNewPassword"), e = b.val(), f = c.val(), g = d.val();
    if (f != g)return this.changeDialog("danger", "New passwords do not match."), void 0;
    if (f < this.requiredPasswordLength)return this.changeDialog("danger", "Password must be at least " + this.requiredPasswordLength + " characters."), void 0;
    var h = new coinpunk.Wallet;
    if (h.createWalletKey(coinpunk.wallet.walletId, e), h.serverKey != coinpunk.wallet.serverKey)return b.val(""), this.changeDialog("danger", "Current password is not valid, please re-enter."), void 0;
    var i = coinpunk.wallet.serverKey;
    coinpunk.wallet.createWalletKey(coinpunk.wallet.walletId, f);
    var j = {originalServerKey: i, wallet: coinpunk.wallet.encryptPayload(), serverKey: coinpunk.wallet.serverKey, payloadHash: coinpunk.wallet.payloadHash};
    coinpunk.wallet.sessionKey && (j.sessionKey = coinpunk.wallet.sessionKey), $.post("api/change", j, function (f) {
        return"error" == f.result ? (a.changeDialog("danger", "Error changing password"), coinpunk.wallet.createWalletKey(coinpunk.wallet.walletId, e), void 0) : (a.template("header", "header"), b.val(""), c.val(""), d.val(""), a.changeDialog("success", "Successfully changed password. You will need to use this to login next time, don't forget it!"), void 0)
    })
}, coinpunk.controllers.Accounts.prototype.changeDialog = function (a, b) {
    $("#changeDialog").removeClass("alert-danger"), $("#changeDialog").removeClass("alert-success"), $("#changeDialog").addClass("alert-" + a), $("#changeDialog").removeClass("hidden"), $("#changeMessage").text(b)
}, $("body").on("click", "#generateAuthQR", function () {
    var a = $("#generateAuthQR");
    a.addClass("hidden"), $.get("api/generateAuthKey", function (b) {
        a.after('<div id="authQR"></div>');
        var c = new URI({protocol: "otpauth", hostname: "totp", path: "Coinpunk:" + coinpunk.wallet.walletId});
        c.setSearch({issuer: "Coinpunk", secret: b.key}), new QRCode(document.getElementById("authQR"), c.toString()), $("#authQR").after('\n      <form role="form" id="submitAuth">\n        <p>Enter code shown on Google Authenticator:</p>\n        <input type="hidden" id="authKeyValue" value="' + b.key + '">\n        <div class="form-group">\n          <label for="confirmAuthCode">Confirm Auth Code</label>\n          <input class="form-control" type="text" id="confirmAuthCode" autocorrect="off" autocomplete="off">\n        </div>\n        <button type="submit" class="btn btn-primary">Confirm</button>\n      </form>\n    '), $("#confirmAuthCode").focus()
    })
}), $("body").on("submit", "#submitAuth", function () {
    var a = $("#submitAuth #confirmAuthCode");
    $.post("api/setAuthKey", {serverKey: coinpunk.wallet.serverKey, sessionKey: coinpunk.wallet.sessionKey, key: $("#authKeyValue").val(), code: a.val()}, function (a) {
        1 != a.set ? $("#authKey").text("Code save failed. Please reload and try again.") : (coinpunk.usingAuthKey = !0, $("#authKey").text("Successfully saved! You will now need your device to login."))
    })
}), $("body").on("submit", "#disableAuth", function () {
    var a = $("#disableAuthDialog");
    a.addClass("hidden");
    var b = $("#disableAuth #disableAuthCode").val();
    $.post("api/disableAuthKey", {serverKey: coinpunk.wallet.serverKey, sessionKey: coinpunk.wallet.sessionKey, authCode: b}, function (b) {
        return"error" == b.result ? (a.text(b.message), a.removeClass("hidden"), void 0) : (coinpunk.usingAuthKey = !1, coinpunk.database.setSuccessMessage("Two factor authentication has been disabled."), coinpunk.router.route("dashboard", "settings"), void 0)
    })
}), coinpunk.controllers.accounts = new coinpunk.controllers.Accounts, coinpunk.controllers.Addresses = function () {
}, coinpunk.controllers.Addresses.prototype = new coinpunk.Controller, coinpunk.controllers.Addresses.prototype.list = function () {
    var a = this;
    this.render("addresses/list", {addresses: coinpunk.wallet.receiveAddresses()}, function (b) {
        a.updateExchangeRates(b)
    });
    //this.render("sidebar", "sidebar")
}, coinpunk.controllers.Addresses.prototype.generateNewAddress = function (a) {
    var b = this, a = a || "", c = coinpunk.wallet.createNewAddress(a, !1);
    this.saveWallet({address: c, override: !0}, function (d) {
        if ("ok" != d.result)return coinpunk.wallet.removeAddress(c), $("#newAddressDialog").removeClass("hidden"), $("#newAddressMessage").text("There was an error creating your address, do not use the new address. Try logging back in, or please try again later."), void 0;
        b.render("addresses/list", {addresses: coinpunk.wallet.addresses()}, function (a) {
            b.updateExchangeRates(a, !1)
        }), $("#newAddressDialog").removeClass("hidden");
        var e = "Created new address " + c;
        if ("" != a)var e = e + " with label " + a;
        $("#newAddressMessage").text(e + ".")
    })
}, coinpunk.controllers.Addresses.prototype.request = function (a) {
    var b = this;
    this.render("addresses/request", {address: a}, function () {
        b.drawRequestQR(a)
    })
}, coinpunk.controllers.Addresses.prototype.requestExchangeUpdate = function () {
    var a = $("#amount").val();
    coinpunk.pricing.getLatest(function (b) {
        var c = parseFloat(b * a).toFixed(2);
        "NaN" != c && $("#amountExchange").val(c)
    })
}, coinpunk.controllers.Addresses.prototype.requestBTCUpdate = function () {
    var a = $("#amountExchange").val();
    coinpunk.pricing.getLatest(function (b) {
        if (0 != a) {
            var c = parseFloat(a / b).toFixed(6).replace(/0+$/, "");
            "NaN" != c && $("#amount").val(c)
        }
    })
}, coinpunk.controllers.Addresses.prototype.drawRequestQR = function (a) {
    var b = URI({protocol: "bitcoin", path: a}), c = $("#amount").val(), d = $("#label").val(), e = $("#message").val();
    c && "" != c && "0.00" != c && b.addQuery("amount", c), d && "" != d && b.addQuery("label", d), e && "" != e && b.addQuery("message", e), $("#qrcode").html(""), new QRCode(document.getElementById("qrcode"), b.toString().replace("://", ":"))
}, coinpunk.controllers.addresses = new coinpunk.controllers.Addresses, coinpunk.controllers.Dashboard = function () {
}, coinpunk.controllers.Dashboard.prototype = new coinpunk.Controller, coinpunk.controllers.Dashboard.prototype.renderDashboard = function () {
    var a = 0, b = this;
    $("#balance").text(coinpunk.wallet.safeUnspentBalance()), $("#pendingBalance").text(coinpunk.wallet.pendingUnspentBalance());
    var c = [], d = coinpunk.wallet.transactions;
    for (a = 0; a < d.length; a++)c.push(d[a].hash);
    $.post("/api/tx/details", {txHashes: c}, function (c) {
        for (a = 0; a < d.length; a++)for (var e = 0; e < c.length; e++)d[a].hash == c[e].hash && (d[a].confirmations = c[e].confirmations);
        var f = [];
        for (a = 0; a < d.length; a++)"send" == d[a].type && f.push(d[a]);
        var g = [];
        for (a = 0; a < d.length; a++)"receive" == d[a].type && g.push(d[a]);
        b.template("sentTransactions", "dashboard/sent", {tx: f.reverse()}, function (a) {
            $("#" + a + " [rel='tooltip']").tooltip(), b.updateExchangeRates(a)
        }), b.template("receivedTransactions", "dashboard/received", {category: "Received", tx: g.reverse()}, function (a) {
            b.updateExchangeRates("receivedTransactions"), $("#" + a + " [rel='tooltip']").tooltip()
        })
    })
}, coinpunk.controllers.Dashboard.prototype.index = function () {
    var a = this;
    this.render("dashboard", {}, function () {
        a.firstDashboardLoad ? a.renderDashboard() : (a.firstDashboardLoad = !0, a.getUnspent(function () {
            a.renderDashboard()
        }))
    })
}, coinpunk.controllers.Dashboard.prototype.updateExchangeRates = function (a) {
    coinpunk.pricing.getLatest(function (b, c) {
        $("#balanceExchange").text(" ≈ " + parseFloat(b * $("#balance").text()).toFixed(2)), $("#exchangePrice").text("1 BTC ≈ " + b + " " + c), $("#" + a + " .exchangePrice").remove();
        for (var d = $("#" + a + " .addExchangePrice"), e = 0; e < d.length; e++)$(d[e]).append('<span class="exchangePrice pull-right"><small>' + ($(d[e]).text().split(" ")[0] * b).toFixed(2) + " " + c + "</small></span>")
    })
}, coinpunk.controllers.dashboard = new coinpunk.controllers.Dashboard, coinpunk.controllers.Tx = function () {
}, coinpunk.controllers.Tx.prototype = new coinpunk.Controller, coinpunk.controllers.Tx.prototype.defaultFee = "0.0001", coinpunk.controllers.Tx.prototype.minimumConfirmationsToSpend = 1, coinpunk.controllers.Tx.prototype.details = function (a) {
    var b = this;
    $.post("/api/tx/details", {txHashes: [a]}, function (a) {
        b.render("tx/details", {tx: a[0]}, function (a) {
            $("#" + a + " [rel='tooltip']").tooltip()
        })
    })
}, coinpunk.controllers.Tx.prototype.send = function () {
    var a = this;
    this.getUnspent(function () {
        coinpunk.router.render("workspace","tx/send", {balance: coinpunk.wallet.safeUnspentBalance()}, function (b) {
            a.updateExchangeRates(b, !1), $("#" + b + " [rel='tooltip']").tooltip()
        })
    })
}, coinpunk.controllers.Tx.prototype.sendExchangeUpdate = function () {
    var a = this, b = $("#amount").val();
    coinpunk.pricing.getLatest(function (c) {
        var d = parseFloat(c * b).toFixed(2);
        if ("NaN" != d) {
            var e = $("#amountExchange");
            e.val() != d && ($("#amountExchange").val(d), a.calculateFee())
        }
    })
}, coinpunk.controllers.Tx.prototype.sendBTCUpdate = function () {
    var a = this, b = $("#amountExchange").val();
    coinpunk.pricing.getLatest(function (c) {
        if (0 != b) {
            var d = parseFloat(b / c).toFixed(6).replace(/\.0+$/, "");
            if ("NaN" != d) {
                var e = $("#amount");
                e.val() != d && (e.val(d), a.calculateFee())
            }
        }
    })
}, coinpunk.controllers.Tx.prototype.create = function () {
    var a = this, b = $("#sendButton");
    b.addClass("disabled");
    var c = $("#createSendForm #address").val(), d = $("#createSendForm #amount").val(), e = [], f = $("#errors");
    this.calculateFee();
    var g = $("#calculatedFee").val();
    if (f.addClass("hidden"), f.html(""), "" == c)e.push("You cannot have a blank sending address."); else try {
        new Bitcoin.Address(c, coinpunk.config.network)
    } catch (h) {
        e.push("The provided bitcoin address is not valid.")
    }
    for (var i = coinpunk.wallet.addresses(), j = 0; j < i.length; j++)i[j].address == c && e.push("You cannot send to your own bitcoin wallet.");
    if ("" == d || 0 == parseFloat(d) ? e.push("You must have a valid amount to send.") : null === /^[0-9]+$|^[0-9]+\.[0-9]+$|^\.[0-9]+$/.exec(d) ? e.push("You must have a valid amount to send.") : coinpunk.wallet.safeUnspentBalance().lessThan(new BigNumber(d).plus(g)) && e.push("Cannot spend more bitcoins than you currently have."), e.length > 0)return this.displayErrors(e, f), b.removeClass("disabled"), void 0;
    var k = $("#changeAddress").val();
    "" == k && (k = coinpunk.wallet.createNewAddress("change", !0));
    var l = coinpunk.wallet.createSend(d, g, c, k);
    a.saveWallet({override: !0, address: k}, function (e) {
        "error" == e.result && "Invalid session key" == e.messages[0] ? (a.displayErrors(["Fatal error: invalid session key, tx was not sent, logging out"], f), delete coinpunk.wallet) : "ok" != e.result ? (a.displayErrors(["An unknown error has occured, tx was not sent. Logging out. Please try again later."], f), delete coinpunk.wallet) : $.post("/api/tx/send", {tx: l}, function (g) {
            return g.error ? (coinpunk.wallet.revertTx(), a.saveWallet({override: !0}, function () {
                "ok" != e.result && (a.displayErrors(["An unknown error has occured, tx was not sent and could not revert tx info. Logging out. Please try again later."], f), delete coinpunk.wallet), a.displayErrors([g.error.message], f), b.removeClass("disabled")
            })) : (coinpunk.database.setSuccessMessage("Sent " + d + " BTC to " + c + "."), a.getUnspent(function () {
                coinpunk.router.route("dashboard")
            }), void 0)
        })
    })
}, coinpunk.controllers.Tx.prototype.displayErrors = function (a, b) {
    if (a.length > 0) {
        b.removeClass("hidden");
        for (var c = 0; c < a.length; c++)$("#errors").html($("#errors").html() + coinpunk.utils.stripTags(a[c]) + "<br>")
    } else;
}, coinpunk.controllers.Tx.prototype.calculateFee = function () {
    var a = $("#address").val(), b = $("#amount").val(), c = $("#sendAmount");
    if (b != c.val() && (c.val(b), "" != a && "" != b)) {
        var d = $("#changeAddress").val(), e = $("#calculatedFee").val();
        "" == d && (d = coinpunk.wallet.createNewAddress("change", !0), $("#changeAddress").val(d));
        var e = coinpunk.wallet.calculateFee(b, a, d);
        $("#calculatedFee").val(e), $("#fee").text(coinpunk.wallet.calculateFee(b, a, d) + " BTC"), this.updateExchangeRates("container", !1)
    }
}, coinpunk.controllers.Tx.prototype.scanQR = function (a) {
    var b = $("#errors");
    if (b.addClass("hidden"), b.html(""), 1 != a.target.files.length && 0 != a.target.files[0].type.indexOf("image/"))return this.displayErrors(["You must provide only one image file."], b);
    qrcode.callback = function (a) {
        if ("error decoding QR Code" === a)return b.removeClass("hidden").text("Could not process the QR code, the image may be blurry. Please try again.");
        console.log(a);
        var c = new URI(a);
        if ("" == c.protocol())return $("#address").val(c.toString()), coinpunk.controllers.tx.calculateFee(), void 0;
        if ("bitcoin" != c.protocol())return b.removeClass("hidden").text("Not a valid Bitcoin QR code.");
        var d = c.path();
        if (!d || "" == d)return b.removeClass("hidden").text("No Bitcoin address found in QR code.");
        $("#address").val(d);
        var e = c.search(!0);
        e.amount && ($("#amount").val(e.amount), coinpunk.controllers.tx.sendExchangeUpdate(), coinpunk.controllers.tx.calculateFee())
    };
    var c = document.createElement("canvas"), d = c.getContext("2d"), e = new Image;
    e.onload = function () {
        2448 == e.width && 3264 == e.height || 3264 == e.width && 2448 == e.height ? (c.width = 1024, c.height = 1365, d.drawImage(e, 0, 0, 1024, 1365)) : e.width > 1024 || e.height > 1024 ? (c.width = .15 * e.width, c.height = .15 * e.height, d.drawImage(e, 0, 0, .15 * e.width, .15 * e.height)) : (c.width = e.width, c.height = e.height, d.drawImage(e, 0, 0, e.width, e.height)), qrcode.decode(c.toDataURL("image/png"))
    }, e.src = URL.createObjectURL(a.target.files[0])
}, coinpunk.controllers.tx = new coinpunk.controllers.Tx, coinpunk.pricing = {cacheTimeout: 3600, pricesApiUrl: "/api/weighted_prices", defaultCurrency: "USD", queuedRequests: [], getLatest: function (a) {
    var b = this;
    return 1 == this.inProgress ? this.queuedRequests.push(a) : (!b.cachedResponse || !b.cachedResponseTime || (new Date).getTime() / 1e3 - b.cachedResponseTime > b.cacheTimeout ? (this.inProgress = !0, $.get(this.pricesApiUrl, function (c) {
        if (!c.error) {
            for (b.cachedResponse = c, b.cachedResponseTime = (new Date).getTime() / 1e3, b.runCallback(a); 0 != b.queuedRequests.length;)b.runCallback(b.queuedRequests.pop());
            b.inProgress = !1
        }
    })) : this.runCallback(a), void 0)
}, getCurrency: function () {
    return coinpunk.database.getCurrency() || this.defaultCurrency
}, runCallback: function (a) {
    for (var b = this.getCurrency(), c = 0; c < this.cachedResponse.length; c++)if (this.cachedResponse[c].code == this.defaultCurrency)var d = parseFloat(this.cachedResponse[c].rate).toFixed(2);
    a(d, b)
}}, coinpunk.router = Path, coinpunk.router.render = function (a, b, c, d) {
    coinpunk.Template.draw("header", "header", c, d), coinpunk.Template.draw(a, b, c, d)
}, coinpunk.router.route = function (a) {
    window.location.href = "#/" + a
};
var sock = null;
coinpunk.router.walletRequired = function () {
    coinpunk.wallet || coinpunk.router.route("signup")
}, coinpunk.router.listener = function () {
    sock = new SockJS("./listener");
   window.onbeforeunload = function () {
        sock && sock.close()
    }, sock.onopen = function () {
        coinpunk.router.listenerTimeout = setInterval(function () {
            sock.send(JSON.stringify({method: "listUnspent", addresses: coinpunk.wallet.addressHashes()}))
        }, 3e4)
    }, sock.onmessage = function (a) {
        var b = JSON.parse(a.data);
        "listUnspent" == b.method && coinpunk.controllers.dashboard.mergeUnspent(b.result, function () {
            var a = $("#receivedTransactions");
            1 == a.length && coinpunk.controllers.dashboard.renderDashboard()
        })
    }, sock.onclose = function () {
        clearInterval(coinpunk.router.listenerTimeout), coinpunk.wallet && setTimeout("coinpunk.router.listener()", 5e3)
    }
}, coinpunk.router.initWallet = function (a) {
    return coinpunk.wallet ? a(!0) : (coinpunk.router.route("signin"), void 0)
}, coinpunk.router.map("#/backup").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.router.render("workspace", "backup")
    })
}), coinpunk.router.map("#/backup/download").to(function () {
    coinpunk.router.initWallet(function (a) {
        if (0 != a) {
            var b = coinpunk.wallet.encryptPayload(), c = new Blob([b], {type: "text/plain;charset=utf-8"});
            saveAs(c, "coincosm-wallet.txt"), coinpunk.router.route("backup")
        }
    })
}), coinpunk.router.map("#/signup").to(function () {
    coinpunk.router.render("view", "signup")
}), coinpunk.router.map("#/signin").to(function () {
    return coinpunk.wallet ? coinpunk.router.render("workspace", "dashboard") : coinpunk.router.render("view", "signin")
}), coinpunk.router.map("#/signout").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && (coinpunk.wallet = null, clearInterval(coinpunk.router.listenerTimeout), coinpunk.controllers.dashboard.firstDashboardLoad = !1, coinpunk.router.route("signin"))
    })
}), coinpunk.router.map("#/dashboard").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.controllers.dashboard.index()
    })
}), coinpunk.router.map("#/tx/details/:hash").to(function () {
    var a = this.params.hash;
    coinpunk.router.initWallet(function (b) {
        0 != b && coinpunk.controllers.tx.details(a)
    })
}), coinpunk.router.map("#/tx/send").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.controllers.tx.send()
    })
}), coinpunk.router.map("#/accounts/import").to(function () {
    coinpunk.wallet ? coinpunk.router.route("dashboard") : window.File && window.FileReader && window.FileList && window.Blob ? coinpunk.router.render("workspace", "accounts/import") : (alert("Importing is not supported in this browser, please upgrade."), coinpunk.router.route("signin"))
}), coinpunk.router.map("#/node_error").to(function () {
    coinpunk.router.render("view", "node_error")
}), coinpunk.router.map("#/account/settings").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.router.render("workspace", "accounts/settings")
    })
}), coinpunk.router.map("#/addresses/list").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.controllers.addresses.list()
    })
}), coinpunk.router.map("#/addresses/request/:address").to(function () {
    var a = this.params.address;
    coinpunk.router.initWallet(function (b) {
        0 != b && coinpunk.controllers.addresses.request(a)
    })
}), coinpunk.router.map("#/buy").to(function () {
    coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.router.render("workspace", "buy")
    })
}), coinpunk.router.map("#/").to(function () {
    coinpunk.router.render("view", "main");
    /*coinpunk.router.initWallet(function (a) {
        0 != a && coinpunk.route("dashboard")
    })*/
}),coinpunk.router.map("#/contacts").to(function(){
    coinpunk.router.render("view","contacts");
    coinpunk.router.render("sidebar","sidebar")
}),coinpunk.router.map("#/request").to(function(){
    coinpunk.router.render("view","request");

    coinpunk.router.render("sidebar","sidebar");
    $('#balance').text(coinpunk.wallet.safeUnspentBalance());
    $('#pendingBalance').text(coinpunk.wallet.pendingUnspentBalance());
}), coinpunk.router.root("#/"), coinpunk.router.listen();