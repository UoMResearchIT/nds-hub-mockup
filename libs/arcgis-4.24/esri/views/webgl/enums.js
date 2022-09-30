// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.ClearBufferBit=void 0;(function(a){a[a.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT";a[a.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT";a[a.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"})(b.ClearBufferBit||(b.ClearBufferBit={}));b.PrimitiveType=void 0;(function(a){a[a.POINTS=0]="POINTS";a[a.LINES=1]="LINES";a[a.LINE_LOOP=2]="LINE_LOOP";a[a.LINE_STRIP=3]="LINE_STRIP";a[a.TRIANGLES=4]="TRIANGLES";a[a.TRIANGLE_STRIP=5]="TRIANGLE_STRIP";a[a.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(b.PrimitiveType||
(b.PrimitiveType={}));b.BlendFactor=void 0;(function(a){a[a.ZERO=0]="ZERO";a[a.ONE=1]="ONE";a[a.SRC_COLOR=768]="SRC_COLOR";a[a.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR";a[a.SRC_ALPHA=770]="SRC_ALPHA";a[a.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA";a[a.DST_ALPHA=772]="DST_ALPHA";a[a.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA";a[a.DST_COLOR=774]="DST_COLOR";a[a.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR";a[a.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE";a[a.CONSTANT_COLOR=32769]="CONSTANT_COLOR";
a[a.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR";a[a.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA";a[a.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"})(b.BlendFactor||(b.BlendFactor={}));b.BlendOperation=void 0;(function(a){a[a.ADD=32774]="ADD";a[a.SUBTRACT=32778]="SUBTRACT";a[a.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"})(b.BlendOperation||(b.BlendOperation={}));b.BufferType=void 0;(function(a){a[a.ARRAY_BUFFER=34962]="ARRAY_BUFFER";a[a.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";
a[a.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER";a[a.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER";a[a.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER";a[a.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER";a[a.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"})(b.BufferType||(b.BufferType={}));b.Face=void 0;(function(a){a[a.FRONT=1028]="FRONT";a[a.BACK=1029]="BACK";a[a.FRONT_AND_BACK=1032]="FRONT_AND_BACK"})(b.Face||(b.Face={}));b.CullMode=void 0;(function(a){a[a.CW=2304]="CW";a[a.CCW=2305]="CCW"})(b.CullMode||(b.CullMode=
{}));b.DataType=void 0;(function(a){a[a.BYTE=5120]="BYTE";a[a.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE";a[a.SHORT=5122]="SHORT";a[a.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT";a[a.INT=5124]="INT";a[a.UNSIGNED_INT=5125]="UNSIGNED_INT";a[a.FLOAT=5126]="FLOAT"})(b.DataType||(b.DataType={}));b.CompareFunction=void 0;(function(a){a[a.NEVER=512]="NEVER";a[a.LESS=513]="LESS";a[a.EQUAL=514]="EQUAL";a[a.LEQUAL=515]="LEQUAL";a[a.GREATER=516]="GREATER";a[a.NOTEQUAL=517]="NOTEQUAL";a[a.GEQUAL=518]="GEQUAL";a[a.ALWAYS=519]=
"ALWAYS"})(b.CompareFunction||(b.CompareFunction={}));b.StencilOperation=void 0;(function(a){a[a.ZERO=0]="ZERO";a[a.KEEP=7680]="KEEP";a[a.REPLACE=7681]="REPLACE";a[a.INCR=7682]="INCR";a[a.DECR=7683]="DECR";a[a.INVERT=5386]="INVERT";a[a.INCR_WRAP=34055]="INCR_WRAP";a[a.DECR_WRAP=34056]="DECR_WRAP"})(b.StencilOperation||(b.StencilOperation={}));b.TextureSamplingMode=void 0;(function(a){a[a.NEAREST=9728]="NEAREST";a[a.LINEAR=9729]="LINEAR";a[a.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST";a[a.LINEAR_MIPMAP_NEAREST=
9985]="LINEAR_MIPMAP_NEAREST";a[a.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR";a[a.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"})(b.TextureSamplingMode||(b.TextureSamplingMode={}));b.TextureWrapMode=void 0;(function(a){a[a.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE";a[a.REPEAT=10497]="REPEAT";a[a.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(b.TextureWrapMode||(b.TextureWrapMode={}));b.TextureType=void 0;(function(a){a[a.TEXTURE_2D=3553]="TEXTURE_2D";a[a.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP";
a[a.TEXTURE_3D=32879]="TEXTURE_3D";a[a.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X";a[a.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X";a[a.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y";a[a.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y";a[a.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z";a[a.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z";a[a.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"})(b.TextureType||
(b.TextureType={}));b.PixelFormat=void 0;(function(a){a[a.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT";a[a.DEPTH_STENCIL=34041]="DEPTH_STENCIL";a[a.ALPHA=6406]="ALPHA";a[a.RGB=6407]="RGB";a[a.RGBA=6408]="RGBA";a[a.LUMINANCE=6409]="LUMINANCE";a[a.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA";a[a.RED=6403]="RED";a[a.RG=33319]="RG";a[a.RED_INTEGER=36244]="RED_INTEGER";a[a.RG_INTEGER=33320]="RG_INTEGER";a[a.RGB_INTEGER=36248]="RGB_INTEGER";a[a.RGBA_INTEGER=36249]="RGBA_INTEGER"})(b.PixelFormat||(b.PixelFormat={}));
b.SizedPixelFormat=void 0;(function(a){a[a.RGBA4=32854]="RGBA4";a[a.R16F=33325]="R16F";a[a.RG16F=33327]="RG16F";a[a.RGB32F=34837]="RGB32F";a[a.RGBA16F=34842]="RGBA16F";a[a.R32F=33326]="R32F";a[a.RG32F=33328]="RG32F";a[a.RGBA32F=34836]="RGBA32F";a[a.R11F_G11F_B10F=35898]="R11F_G11F_B10F";a[a.RGB8=32849]="RGB8";a[a.RGBA8=32856]="RGBA8";a[a.RGB5_A1=32855]="RGB5_A1";a[a.R8=33321]="R8";a[a.RG8=33323]="RG8";a[a.R8I=33329]="R8I";a[a.R8UI=33330]="R8UI";a[a.R16I=33331]="R16I";a[a.R16UI=33332]="R16UI";a[a.R32I=
33333]="R32I";a[a.R32UI=33334]="R32UI";a[a.RG8I=33335]="RG8I";a[a.RG8UI=33336]="RG8UI";a[a.RG16I=33337]="RG16I";a[a.RG16UI=33338]="RG16UI";a[a.RG32I=33339]="RG32I";a[a.RG32UI=33340]="RG32UI";a[a.RGB16F=34843]="RGB16F";a[a.RGB9_E5=35901]="RGB9_E5";a[a.SRGB8=35905]="SRGB8";a[a.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8";a[a.RGB565=36194]="RGB565";a[a.RGBA32UI=36208]="RGBA32UI";a[a.RGB32UI=36209]="RGB32UI";a[a.RGBA16UI=36214]="RGBA16UI";a[a.RGB16UI=36215]="RGB16UI";a[a.RGBA8UI=36220]="RGBA8UI";a[a.RGB8UI=36221]=
"RGB8UI";a[a.RGBA32I=36226]="RGBA32I";a[a.RGB32I=36227]="RGB32I";a[a.RGBA16I=36232]="RGBA16I";a[a.RGB16I=36233]="RGB16I";a[a.RGBA8I=36238]="RGBA8I";a[a.RGB8I=36239]="RGB8I";a[a.R8_SNORM=36756]="R8_SNORM";a[a.RG8_SNORM=36757]="RG8_SNORM";a[a.RGB8_SNORM=36758]="RGB8_SNORM";a[a.RGBA8_SNORM=36759]="RGBA8_SNORM";a[a.RGB10_A2=32857]="RGB10_A2";a[a.RGB10_A2UI=36975]="RGB10_A2UI"})(b.SizedPixelFormat||(b.SizedPixelFormat={}));b.PixelType=void 0;(function(a){a[a.FLOAT=5126]="FLOAT";a[a.UNSIGNED_BYTE=5121]=
"UNSIGNED_BYTE";a[a.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8";a[a.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4";a[a.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1";a[a.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5";a[a.BYTE=5120]="BYTE";a[a.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT";a[a.SHORT=5122]="SHORT";a[a.UNSIGNED_INT=5125]="UNSIGNED_INT";a[a.INT=5124]="INT";a[a.HALF_FLOAT=5131]="HALF_FLOAT";a[a.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV";a[a.UNSIGNED_INT_10F_11F_11F_REV=
35899]="UNSIGNED_INT_10F_11F_11F_REV";a[a.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV";a[a.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"})(b.PixelType||(b.PixelType={}));b.RenderbufferFormat=void 0;(function(a){a[a.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16";a[a.STENCIL_INDEX8=36168]="STENCIL_INDEX8";a[a.DEPTH_STENCIL=34041]="DEPTH_STENCIL";a[a.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24";a[a.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F";a[a.DEPTH24_STENCIL8=
35056]="DEPTH24_STENCIL8";a[a.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"})(b.RenderbufferFormat||(b.RenderbufferFormat={}));b.Usage=void 0;(function(a){a[a.STATIC_DRAW=35044]="STATIC_DRAW";a[a.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW";a[a.STREAM_DRAW=35040]="STREAM_DRAW";a[a.STATIC_READ=35045]="STATIC_READ";a[a.DYNAMIC_READ=35049]="DYNAMIC_READ";a[a.STREAM_READ=35041]="STREAM_READ";a[a.STATIC_COPY=35046]="STATIC_COPY";a[a.DYNAMIC_COPY=35050]="DYNAMIC_COPY";a[a.STREAM_COPY=35042]="STREAM_COPY"})(b.Usage||
(b.Usage={}));b.ShaderType=void 0;(function(a){a[a.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER";a[a.VERTEX_SHADER=35633]="VERTEX_SHADER"})(b.ShaderType||(b.ShaderType={}));b.FramebufferTarget=void 0;(function(a){a[a.FRAMEBUFFER=36160]="FRAMEBUFFER";a[a.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER";a[a.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"})(b.FramebufferTarget||(b.FramebufferTarget={}));b.TargetType=void 0;(function(a){a[a.TEXTURE=0]="TEXTURE";a[a.RENDER_BUFFER=1]="RENDER_BUFFER";a[a.CUBEMAP=2]="CUBEMAP"})(b.TargetType||
(b.TargetType={}));b.DepthStencilTargetType=void 0;(function(a){a[a.NONE=0]="NONE";a[a.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER";a[a.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER";a[a.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER";a[a.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"})(b.DepthStencilTargetType||(b.DepthStencilTargetType={}));b.ResourceType=void 0;(function(a){a[a.Texture=0]="Texture";a[a.BufferObject=1]="BufferObject";a[a.VertexArrayObject=2]="VertexArrayObject";
a[a.Shader=3]="Shader";a[a.Program=4]="Program";a[a.FramebufferObject=5]="FramebufferObject";a[a.Renderbuffer=6]="Renderbuffer";a[a.Sync=7]="Sync";a[a.COUNT=8]="COUNT"})(b.ResourceType||(b.ResourceType={}));b.ColorAttachment=void 0;(function(a){a[a.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0";a[a.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1";a[a.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2";a[a.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3";a[a.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4";a[a.COLOR_ATTACHMENT5=
36069]="COLOR_ATTACHMENT5";a[a.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6";a[a.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7";a[a.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8";a[a.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9";a[a.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10";a[a.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11";a[a.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12";a[a.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13";a[a.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14";a[a.COLOR_ATTACHMENT15=
36079]="COLOR_ATTACHMENT15"})(b.ColorAttachment||(b.ColorAttachment={}));b.CompressedTextureFormat=void 0;(function(a){a[a.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT";a[a.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT";a[a.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT";a[a.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT";a[a.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC";a[a.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC";
a[a.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC";a[a.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC";a[a.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2";a[a.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2";a[a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";a[a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";a[a.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC";a[a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=
37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"})(b.CompressedTextureFormat||(b.CompressedTextureFormat={}));b.UniformType=void 0;(function(a){a[a.FLOAT=5126]="FLOAT";a[a.FLOAT_VEC2=35664]="FLOAT_VEC2";a[a.FLOAT_VEC3=35665]="FLOAT_VEC3";a[a.FLOAT_VEC4=35666]="FLOAT_VEC4";a[a.INT=5124]="INT";a[a.INT_VEC2=35667]="INT_VEC2";a[a.INT_VEC3=35668]="INT_VEC3";a[a.INT_VEC4=35669]="INT_VEC4";a[a.BOOL=35670]="BOOL";a[a.BOOL_VEC2=35671]="BOOL_VEC2";a[a.BOOL_VEC3=35672]="BOOL_VEC3";a[a.BOOL_VEC4=35673]="BOOL_VEC4";
a[a.FLOAT_MAT2=35674]="FLOAT_MAT2";a[a.FLOAT_MAT3=35675]="FLOAT_MAT3";a[a.FLOAT_MAT4=35676]="FLOAT_MAT4";a[a.SAMPLER_2D=35678]="SAMPLER_2D";a[a.SAMPLER_CUBE=35680]="SAMPLER_CUBE";a[a.UNSIGNED_INT=5125]="UNSIGNED_INT";a[a.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2";a[a.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3";a[a.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4";a[a.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3";a[a.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4";a[a.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2";a[a.FLOAT_MAT3x4=35688]=
"FLOAT_MAT3x4";a[a.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2";a[a.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3";a[a.SAMPLER_3D=35679]="SAMPLER_3D";a[a.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW";a[a.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY";a[a.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW";a[a.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW";a[a.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D";a[a.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D";a[a.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE";a[a.INT_SAMPLER_2D_ARRAY=36303]=
"INT_SAMPLER_2D_ARRAY";a[a.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D";a[a.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D";a[a.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE";a[a.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"})(b.UniformType||(b.UniformType={}));b.SyncParameter=void 0;(function(a){a[a.OBJECT_TYPE=37138]="OBJECT_TYPE";a[a.SYNC_CONDITION=37139]="SYNC_CONDITION";a[a.SYNC_STATUS=37140]="SYNC_STATUS";a[a.SYNC_FLAGS=37141]="SYNC_FLAGS"})(b.SyncParameter||
(b.SyncParameter={}));b.SyncStatus=void 0;(function(a){a[a.UNSIGNALED=37144]="UNSIGNALED";a[a.SIGNALED=37145]="SIGNALED"})(b.SyncStatus||(b.SyncStatus={}));b.ClientWaitSyncStatus=void 0;(function(a){a[a.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED";a[a.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED";a[a.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED";a[a.WAIT_FAILED=37149]="WAIT_FAILED"})(b.ClientWaitSyncStatus||(b.ClientWaitSyncStatus={}));b.SyncCondition=void 0;(function(a){a[a.SYNC_GPU_COMMANDS_COMPLETE=
37143]="SYNC_GPU_COMMANDS_COMPLETE"})(b.SyncCondition||(b.SyncCondition={}));b.SyncFlag=void 0;(function(a){a[a.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"})(b.SyncFlag||(b.SyncFlag={}));b.BASE_TEXTURE_UNIT=33984;b.DepthStencilAttachment=33306;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});