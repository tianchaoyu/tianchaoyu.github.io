var store = [{
        "title": "道路交通分配",
        "excerpt":"以下，以emme的交通分配为例 1、EMME常规交通分配 1.1、常见交通分配方法 交通分配分为Highway分配和公交分配，两者独立运行。Hightway分配方法主要包括：Sola traffic assignment、PToll traffic assignment、Stochastic traffic assignment、Standard traffic assignment、Path-based traffic assignment、Space-time traffic assignment、system-optimal assignment等。EMME中的交通分配问题都是基于传统标准的用户均衡理论的快速收敛的网络平衡模型。不同的方法主要在于考虑的对象内容，收敛速度以及快速求解过程的区别。 SOLA traffic assignment一种基于线性近似方法的快速收敛的用户最优均衡交通分配。 它可以在共享内存计算平台上的单个处理器或多个处理器上运行,推荐使用。 PToll Traffic Assignment部分基于快速收敛的SOLA流量分配，PToll流量分配提供了更简单，更全面的收费模型。 Stochastic Traffic Assignment随机用户均衡（SUE）分配，它计算多个多类均衡分配的平均值，使用某种分配函数来影响link的cost。 用于不仅仅由于拥塞而导致多径效应的应用，或者用于UE分配可能导致全有或全部分配的应用，例如在农村，区域等。 Standard Traffic Assignment基于线性逼近算法[FrankWolfe1956]的改进的标准用户最佳均衡交通分配。 它也可以在单个处理器或多个处理器上执行。 Path-based Traffic Assignment快速收敛的用户最佳均衡流量分配可提供更好的性能，更好的收敛和更快的基于路径的结果分析。 它基于投影梯度方法的求解。 Space-time Traffic Assignment一种准动态流量分配方法，它利用现有的网络拓扑和延迟功能来执行与时间有关的网络加载。 需求矩阵可能是经过时间配置的，并且网络负载随着流量在网络中的流动而随时间变化。 推荐用于州，国家或长途旅行的模型，在这些模型中，长途旅行不应同时加载所有时间段。 System-optimal assignment系统最优分配，基于Wardrop的第二原理 2、Sola traffic assignment的原理 2.1、原理 该算法基于用户均衡理论，满足wardrop原理，即网络平衡时，每个OD对的径路具有相等和最小的费用阻抗。 2.2、计算过程 3、EMME设置操作方法...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/traffic%20assignment/",
        "teaser": null
      },{
        "title": "公交分配",
        "excerpt":"以下，以emme的交通分配为例 1、EMME常见公交分配方法 Emme提供了一系列的交通任务，以评估交通政策，包括车辆容量，拥挤，票价计划，班次，时间表等，并用于模拟世界上一些最复杂的公共交通系统。Emme传输分配包括发布时可用的最快和唯一的基于多线程的基于频率的交通分配。 Extended Transit Assignment多模式，多路径的交通分配，可以概括标准的交通分配（最佳策略），从而可以明确建模起点连接器的选择，对在公共站点选择交通服务的行进时间（除了行进路程）的敏感性等 。 还节省了策略并提供了复杂的分配后分析功能. Congested Transit Assignment:使用流量相关成本函数对车辆拥堵进行建模的公交分配。 link成本对运输量的依赖性可能表示由于乘客数量而导致运输车辆的速度降低，或者包括随车辆变得拥挤而增加的不舒适项的广义成本。 Capacitated Transit Assignment使用连续平均法（MSA）来获得与交通路段拥堵相对应的交通流量的交通分配。 车辆拥挤功能（如在拥挤的交通分配工具中一样）以及由于过境车辆的容量而导致的停车等待时间增加被用于建模降低的舒适度水平以及停车等待时间的增加. Stochastic Transit Assignment一种随机交通分配，可计算多个基于策略的分配的平均值，其中使用选择的分配因子中的一个来干扰路段的行驶时间，感知的行进距离和/或感知因子。 Deterministic Transit Assignment完整的时间表分配，其中将详细的出发和到达信息合并到最佳路径中。 它明确考虑了有关早退和迟到的选择。 对于在整个郊区和城际应用的计划时间内在不同的行程上运行的服务（例如国家或地区服务）很有用。 这对于运筹学也很有用。 尚未在Modeller中实现。 有关更多信息，请参见Emme Prompt手册4.5.9，确定性运输分配。 Disaggregate Transit Assignment允许对各个过境旅行进行详细分析的分配，其中将起点和终点指定为精确的坐标或节点号，而不是区域号。 尚未在Modeller中实现。 有关更多信息，请参见《 Emme Prompt手册4.5.8，公交行程的详细分析》。 2、公交分配设置方法—Extended transit assignment 2.1、网络和需求设置——network and demand 可选多种transit,接驳mode如果多选，可能会出现只选最快速度的那种方式 说明：mode的设置主要包括transit和aux_transit，transit为main modes,aux为辅助公交，即接驳。操作时，根据实际情况进行选择。例如： 2.2、时间和费用——Times and costs 2.2.1、 等车时间——waiting time...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit%20assignment/",
        "teaser": null
      },{
        "title": "api开发方法",
        "excerpt":"1、EMME的二次开发  EMME是基于python语言构建的，其内部内置python解释器和Jupyter notebook编译器。 ​  1.1、软件入口      tools-&gt;notebook      1.2、手册与案例      Desktop API guide：桌面接口指引   Modeller API Guide：建模器接口指引   Data Table API Guide：数据表接口指引   Matrix API Guide：矩阵接口指引   Network API Guide：网络接口指引   Emme API Reference：EMME所有接口手册   2、其他编译器开发  EMME自带python解释器，默认带有EMME的接口包，可使用其他编译器，构建基于emme编译器版本的python虚拟环境，同时可在其他编译器中调用EMME接口。    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/api/",
        "teaser": null
      },{
        "title": "开发实例",
        "excerpt":"1、Emme API contents  常见对象：      Desktop   Data Table   Modeller   Network   Matrix   2、基于jupyter notebook入口的开发  jupyter notebook的入口在Emme 的Desktop下，该模式下，已经链接了EMME bank数据库，因此在jupyter notebook下，不需要重新链接，就可以直接操作。  2.1、主要操作方法      根据需要查看样例；   复制样例，更改输入，直接运行。      3、基于pycharm编译器的程序开发  emme提供纯脚本的接口，可以直接调用EMME的程序接口，绕过desktop,直接访问和读取数据库。  3.1、主要操作方法      访问emme 工程文件，构建emme对象，访问内部函数 ```python   ```  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/api_example/",
        "teaser": null
      },{
        "title": "环境配置",
        "excerpt":"emme软件：功能，作用，优缺点   核心内容      emme软件基础   网络编辑与计算   道路交通分配   道路分析   公交分配   公交分析   主要案例   1、EMME软件   Emme由INRO开发的一款综合性交通规划软件系统，INRO的主营产品有EMME（宏观交通规划），dynameq(中观动态仿真)，cityphy(GIS可视化)，本部在加拿大，于21年被奔特利收购。 emme为用户提供了一套需求分析及网络分析与评价工具和方法。      早期的EMME使用广泛的是emme2,通过宏命令，问答式操作和批量脚本处理。   emme4全面拥抱python语言，向下兼容宏命令处理；   emme4.5以后支持python3，新增人口合成模块，新增agent base;      使用感受：路网编辑操作，没有Transcad方便，在算法，扩展接口方面，性能优秀。    2、EMME软件重大模块      桌面（Desktop）:可视化，数据管理，分析与编辑；   建模器（modeller）:交通规划管理组件，用于模型基础处理和模型构建工具包；   API（开发接口）：基于python语言，支持jupyter notebook，自动化运行接口，脚本开发；   日记本（LogBook）:日志查看和检查   宏命令（Prompt）:宏命令接口，低版本版时的API接口语言；   3、EMME学习的工具和手册      EMME实操软件   emme_prompt_manual:宏命令操作手册   EMME help手册   EMME API接口：Desktop API;Modeller API;Data Table Api;Matrix API;Network API;EMME API Reference;   INRO官网论坛  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/basic-info/",
        "teaser": null
      },{
        "title": "基本要素",
        "excerpt":"1、EMME数据基础 EMME的软件的架构，以数据库（路网，小区，场景，矩阵等）为基础，上层支撑桌面可视化，中间使用建模器和API接口衔接和扩展软件功能，底层是基于SQL的数据部库。具体结构如下： 1.1、网络基础 网络是由node、link、turn、centroid、mode、transit segment、transit line、transit vehicles等组成。 1.1.1、方式结构（modes） 方式结构共定义了四种大类： AUTO：道路私人小汽车 Auxiliary auto:辅助机动车：非私家车以外，例如共享汽车，货车，出租车等 Transit:公交车 Auxiliary Transit:公交接驳方式； 方式结构的定义： 方式结构需要指定类型： 类型 说明 示例 id 编号（字母） a description 描述 Auto mode_type 类型 AUTO cost_time_coeff 每小时损耗美元 0 cost_distance_coeff 每公里损耗美元 0 energy_time_coeff 每小时损耗能量 0 speed_factor 速度 5 总共支持60种mode,其中AUTO是唯一的一种，其他的方式可以有多种子类型 接驳方式一定要填写速度，单位：km/h 1.1.2、node节点 节点包括普通节点，交叉口，小区。 普通节点：大规模路网中，emme软件狗会限制node的数量，往往需要扩容； 标准属性：i,xi,yi,ui1,ui2,ui3,lab,inboa,fiali 交通小区：小区形心，创建矩阵的时，默认以小区数量作为矩阵的维度；多个scenario场景共享一套交通小区，小区维度不一样时，可能会报错； 交叉口：允许转向的节点，定义形式：i-&gt;j-&gt;k,由三个点形成。 交叉口允许添加惩罚和禁止：0表示禁止转向，-1表示允许转向不惩罚...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/elements-info/",
        "teaser": null
      },{
        "title": "工程创建",
        "excerpt":"1、starting emme emme工程的创建方法： 软件界面创建 脚本语言 2、脚本化创建emme工程 2.1、主要步骤 创建emme工程数据库（emme bank） 创建空的emme工程，设置工程位置，名称，定义工程参数维度， dimensions = { \"scalar_matrices\":999, 'origin_matrices':999, 'destination_matrices':999, 'full_matrices':9999, 'scenarios':30, 'centroids':5000, 'regular_nodes':57499, 'links':250000, 'turn_entries':400000, 'transit_vehicles':30, 'transit_lines':20000, 'transit_segments':800000, 'extra_attribute_values':40000000, 'functions':99,\"operators\":2000 } 创建基础scenario 数据加载： 加载函数 创建矩阵 添加mode 添加车辆信息 添加小区 添加小区地带属性（zone partition） 添加基础网络（node,link) 添加线性文件 添加公交文件 添加额外属性（node,link,transit line,transit segment） 空间坐标系指定 设定vdf function参数指定 结束 3、EMME工程文件结构 Database:为基础数据库，存放emmebank，matrix等文件； logbook:为日志记录文件夹，存放执行记录；...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/create_project/",
        "teaser": null
      },{
        "title": "操作界面",
        "excerpt":"1、EMME软件   1.1、EMME操作界面   1.1.1、deskptop界面        菜单栏：            File:工程系统设置，结果打印输出；       Edit：网络编辑，在编辑路网下，激活；       View:视野，查看工具，放大，放小；       Tools:工具：进入modeller(仿真器)，LogBook(日志记录)，Notebook(python脚本)，网络编辑，宏命令等入口       Window:窗口设计       help:参考手册           工具栏：主要工具的快捷入口   工程项目管理窗口：可以快速打开工程文件，打开设定好的样式，结果表，搜索网络节点等；   显示窗口：可以创建多个TAZ，便于管理；   数据管理：叠加多种数据，点，线，面等数据图层，调整格式样式；   1.1.2、 Modeller工具箱    emme的核心工具，封装了关于数据管理，网络计算，矩阵计算，交通分配，公交分配，需求计算，方式选择，子区域分析等多种方法；   1.1.3、LogBook日志工具     emme的日志功能，可以查看历史时刻，使用了什么工具，执行了什么操作，成功与失败，计算的经过与结果，便于追溯。   1.1.4、NoteBook脚本工具    emme的API接口，以notebook的形式，使用python语言，和modeller,desktop等模块调试使用非常便捷。  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/software/",
        "teaser": null
      },{
        "title": "图标展示",
        "excerpt":"功能描述：查看交通分配结果和模板保存 1、 基本图层 emme的desktop上面以tab的形式，会展示多个页面图，表等。利用不同的图层和表和数据，可以配置出不同的效果图，自由度比较高。 图层操作位置： 保存为模板 叠加新图层，或者背景 GIS:叠加互联网地图，OSM,需要软件在维护期才可以 node:节点图层 link:link图层 公交：公交图层 其他：直方图，函数曲线等 图例显示:以link为例 link filter:link筛选，通过属性筛选，内置类别：auto道路，公交道路，连杆connector,接驳连杆等 offset:link之间的间隔设置， links:不同link不同的颜色渲染 bar value:link的粗细形态，选择link的属性，根据属性调整粗细，常用来显示道路流量； scale:粗细比例尺 Bars:属性值的颜色调整：可以归一化处理也可以分段处理 link test:link属性文字显示 test values:属性选择，可以选择多个字段，用逗号分隔 Text:显示字段大小，格式调整 2、结果展示与模板保存 2.1、charts图表 显示函数，直方图，散点图等图表 2.2、矩阵操作 常用的操作： desire line for select zone:画期望线 zone volaus from aggregations:查看矩阵分布 2.2、 网络展示 网络图层展示，含有固定的模板，常用是不同场景的对比，用于不同方案测试结果比对。 2.3、结果分析 道路结果分析 速度，时间，流量等分配结果显示 公交结果分析：图和表，非格子图表为图，格子图表为表 线路信息，线路流量，站点流量； 线路流量表，segement 上下客流表等；&gt;...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/image_table/",
        "teaser": null
      },{
        "title": "字段计算",
        "excerpt":"1、字段计算方法  EMME的字段大致分为三类：     默认属性：创建工程会自动创建，默认为0，ex：i,j；   额外属性：操作人员自己创建的属性字段，以@符合开始，不支持大写，只支持数据，ex：@a，@b；   标记属性：字符字段，以#开始；ex：#company；   针对默认属性和额外属性的计算和填充有三个入口：     网络编辑模式下，手动修改；   网络计算模型下，按条件计算；   在Modeller下，进行字段属性值计算；      EMME不允许直接在属性表上编辑字段值；    2、网络计算：  2.1、网络计算模式     工具栏选择网络计算；   结果类型选择：计算类型      ● （1）填充字段选择； ● （2）计算方法或计算表达式； ● （3）筛选条件； ● （4）计算；    3、Modeller计算  3.1、Modeller启动     3.2、Modeller计算    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/field_calculate/",
        "teaser": null
      },{
        "title": "属性与矩阵",
        "excerpt":"1、属性表操作  1.1、属性表查看      1.2、属性表复制     filter：条件筛选；   Select All：选择所有，构建选择集；   Copy Selected Items：复制选择集对象；   粘贴到excel文件中；      1.3、属性表导出     文件：以数字表格形式打开；   保存在Data Table中；   保存为csv文件；      2、Matrix操作  2.1、矩阵读取     起点筛选：p==2；   终点筛选：q==2;      2.2、其他操作    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/field_matrix/",
        "teaser": null
      },{
        "title": "网络编辑",
        "excerpt":"1、 手动编辑  1.1、编辑状态      选择工具栏选择路网编辑  进去路网编辑状态，注意，此时数据库处理被锁定状态，无法使用moddeler。经常在意外断电的情况下，再次启动emme。会发现，无法操作数据库，可能原因就是数据库被锁，需要手动删除emme bank下的elock文件。   路网编辑状态如下             在下方选择编辑对象，mode、node、link等；       编辑设置中：添加node默认ID设置，是node从默认值开始往上编号，防止和小区ID区号交叉；            1.2、批量复制粘贴  1.2.1、构建选择集     条件筛选；   构建选择集；  1.2.2、复制粘贴 ● 复制某一行属性列：copy(this row) ● 粘贴：ctrl+v ● 选择 填充字段    2、编辑历史 编辑完成后，所有操作过程都将记录在文本文件中，假如不同场景下的路网需要进行同样操作，则只需重复执行操作记录脚本文件即可。   2.1、找到编辑历史文件 不同工程之间可将Network Build文件夹下的文件进行共享 ● 点击编辑历史 ● 点击文件夹 ● 双击历史记录文件 ● 点击run all      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network-edit/",
        "teaser": null
      },{
        "title": "道路分配-溯源分析",
        "excerpt":"1、功能  分析关键通道，出行需求来源。  2、实现方法  1）创建额外标记属性（默认参数为0），选择分析对象，将额外参数赋值为1； 2）使用道路交通分配方法，默认使用sola traffic assignent; 3）根据分析类型（车辆类型），选择需求分析矩阵； 4）路径分析：统计path上额外属性值的总和，根据阈值统计该路径上的出行需求矩阵； 5）结果输出与分析；   3、示例：  3.1、路段选择：以某过江桥梁为例     3.2、额外属性创建与赋值     3.3、需求分析     3.4、路径分析     3.5、结果分析   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/suyuan_analysis/",
        "teaser": null
      },{
        "title": "道路分配-道路管控",
        "excerpt":"1、功能  展示道路禁行前后，原道路流量在道路禁行后新的路径规划；  2、实现方法  1）选择具体道路，进行道路溯源分析，提取该道路出行需求矩阵，并保存该道路的流量； 2）复制场景，禁行该道路，在溯源基础上添加需求分析，保存道路流量； 3）场景对比，打开两个场景，显示同样道路额外属性字段，进行效果展示；  3、案例  3.1、复制场景，并进行道路溯源分析           3.2、道路禁行     3.3、道路交通分配        3.4、场景对比     ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network-manager/",
        "teaser": null
      },{
        "title": "道路分配-差异化收费",
        "excerpt":"1、功能  特定通道或区域，对不同类型车辆类型进行收费，提取不同需求的平均费用； 典型场景如：CBD，小货车进入收费；桥梁过桥收费；   2、实现方法  1）提取不同类别下的出行需求：小汽车、货车； 2）同一道路设置不同的费用标准； 3）道路交通分配，不同类别下的差异化费率，提供不同时间价值； 4）道路skim，提取费用矩阵；   3、案例实施  3.1、出行需求与费用参数设置     3.2、总费用统计与单项费用统计              3.3、结果分析   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/chayihua_fare/",
        "teaser": null
      },{
        "title": "合乘车道分析",
        "excerpt":"1、功能  合乘车道（HOV）分析 ​  2、实现方法  1）提取合乘需求矩阵HOV和非合乘需求矩阵LOV 2）对道路进行编辑，将HOV车道和LOV车道分离为两个link，允许HOV车辆进入LOV车道，LOV车道不允许进入HOV车道; 3）通过交通分配，路径搜索，分析HOV车道出行需求与HOV道路流量分布； ​  3、案例实施  3.1、路网编辑     3.2、需求分配     3.3、路径分析        ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/hecheng_road/",
        "teaser": null
      },{
        "title": "道路分配-出行距离分析",
        "excerpt":"1、功能  不同出行距离下的出行矩阵   2、实现方法  1）道路交通分配； 2）按路径距离聚合需求矩阵   3、案例实施     ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/trip_length/",
        "teaser": null
      },{
        "title": "道路分配-截断分析",
        "excerpt":"1、功能  分析路径前部分（冷启动），中间部分，最后部分（停车）的出行需求与车公里数。    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/jieduan_analysis/",
        "teaser": null
      },{
        "title": "道路分配-遍历分析",
        "excerpt":"1、功能  获取不同起终点之间的出行需求，例如      子区域需求分析：CBD的出行需求；   高速公路廊道，匝道到匝道的出行需求；   高速公路收费站到收费站的出行需求矩阵；     2、实现方法      1）选择区域，标记进口和出口 2）遍历分析，结果统计       3、实施案例   3.1、区域标记     3.2、进出口     3.3、路径分析      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/list_analysis/",
        "teaser": null
      },{
        "title": "道路分配-道路收费模型",
        "excerpt":"1、功能      Emme支持两种类型的收费系统:基于上限距离和匝道到匝道。这两种类型都需要定义一个或多个收费设施。收费设施有两个组成部分:由所有类共享的收费拓扑和依赖于类/收费类型的收费成本。有关详细信息，请参见定义收费设施。   基于路径收费；   基于起终点收费；​     2.1、基于路径收费                   3、基于起终点收费                 ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/road_fare/",
        "teaser": null
      },{
        "title": "公交分配-多模式交通分配",
        "excerpt":"1、功能  emme的交通分配允许多种交通方式同时分配，也可以不同交通方式单独分配，并将不同方式的交通流量进行叠加。 不同的方式对应于不同的分析场景。      一票制公交适用于多种交通方式综合分配，在需求模型中使用综合交通进行需求分析，无需进行子类别选择。子交通方式的选择在交通分配模型中实现。   不同交通方式单独分配，可以skim出不同方式的出行阻抗，便于需求模型单独控制不同方式的出行总量。## 2、多交通方式同时分配     2.1、选择多种交通方式及交通需求矩阵             2.2、设置换乘规则和换乘参数     2.3、其他参数设置     3、不同方式单独分配  3.1、分配第一种公交模式  3.2、分配第二种公交模型      允许在存在的公交客流基础上进行分配   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/multi_assigment/",
        "teaser": null
      },{
        "title": "公交分配-必须使用某种交通方式",
        "excerpt":"1、功能      公交分配过程中，在起终点路径中必须使用某种交通方式​     2、功能设置             ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/must_mode/",
        "teaser": null
      },{
        "title": "公交分配-公交阻抗分析",
        "excerpt":"1、功能  获取子方式的公交阻抗    2、阻抗类型      距离矩阵   平均换乘次数   第一次等车时间   总等车时间   第一次登车时间   总登车时间   车内时间   车外时间  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_skim_analysis/",
        "teaser": null
      },{
        "title": "公交分配-公交应用",
        "excerpt":"1、功能      公交线路分析（公交溯源）   换乘次数分析   公交出行距离分析   公交类型分析   接驳距离分析   线路与线路换乘分析（单站或多站）   站点不同公交类型的换乘（枢纽）   子区域出行需求提取（CBD）   站点到站点之间的需求分析   小区到小区之间全路径分析；   换乘站点分离（轨道站点换乘，多个物理点，站名相同）分析线路之间的换乘；   多模式换乘优惠，基于换乘次数的区间优惠；  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_yingyong/",
        "teaser": null
      },{
        "title": "公交分配-公交网络分析",
        "excerpt":"1、功能  分析小区之间或者区域之间的道路，线路，站点等之间的流量，惩罚。   2、分析指标  2.1、link      接驳客流        接驳时间### 2.2、公交segment       断面客流   总登车客流   初次登车客流   总下车客流        最后下车客流### 2.3、节点       等车时间（最小，最大，平均）      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_network/",
        "teaser": null
      },{
        "title": "快速创建emme工程",
        "excerpt":"emme 工程创建 1、创建emme bank 在file文件下，选择新建工程：create a new project 新建工程的名称和位置 工程类型 创建威尼派克的样例工程：内置样例，初学者可以 创建strategy city project:用于测试和教学，规模范围小 创建空的工程：没有数据 导入存在数据库：可以兼容旧版本工程 选择工程规模 控制工程参数，影响工程空间大小，转移是否方便 不同的emme key，能接受的参数最大限制不一样； 空间索引选择 选择地图服务器osm,鼠标移动到指定区域，系统自动生成UTM zone; 工程空间概要，用于检查设置参数,确认，则完成了工程创建。 2、通过shpfile完成emme数据导入 2.1、从shpfile到数据库 工具入口：shapefile to emme conversion 选择文件: polyline shapefile:只有线层，会自动生成link的from_node to_node; nodes and link:添加需要指定inode,jnode 标准属性选择：指定标准属性对应的字段 direction:方向，emme中不含有方向，都是from_node,to_node,Transcad的link含有dir,具有AB和BA区别，因此shp文件转化为emme的link时，需要指定是转化为两个link(two way)和一个link(one-way) length:道路长度，EMME中需要设定尺寸单位； modes:link上运行使用的交通方式 type:道路类别 lanes:车道数，无法区分ab,ba的车道数； vdf:延误函数 ul1,ul2,ul3:辅助字段 在某种情况下回报错，可能是两个点之间含有多个link,这样会出现两个from_to的link,不允许出现两个点的环形 连通性和线路长度选择：next 创建数据库：指定转化的文件 base...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/create-emme-project/",
        "teaser": null
      },{
        "title": "路径检测分析",
        "excerpt":"   功能描述：道路分配结果分析，通过分析最短路径上的时间距离和费用，从而检查分配结果的正确与否。     1、shortest path analysis       功能入口：   2、指标分析        （1）路径显示；   （2）起终点对于node id;   （3）路径统计指标：距离，时间，费用等，允许统计路径上多个指标，选择第一个指标最短的路径；   （4）指标统计结果，依次对于link cost的选定的指标；  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/path_analysis/",
        "teaser": null
      },{
        "title": "select link分析",
        "excerpt":"emme支持单独对某个link进行OD溯源分析，具体操作如下：   1、LINK选择      基于link构建额外属性，@select_link,属性默认值为0；   选择待分析link，属性赋值为1；      2、道路交通分配      1）使用sola traffic assignment,选择待分配的出行需求；               2）路径分析               link component：选择额外属性@select_link;   operater:选择max;   阈值上下选择1；   path:选择analyzed demand on selected paths;   OD values:选择结果保存矩阵，该矩阵为经过该link的总需求；   3）结果统计与分析        3、结果展示             ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/select_link/",
        "teaser": null
      },{
        "title": "公交skim分析",
        "excerpt":"emme支持起终点之间的公交路径选择分析，可详细查阅起终点之间经过的路径，时间，费用，换乘参数等，用户可通过路径分析，来检查公交分配参数是否合理。 具体操作如下： 1、modeller使用path detail工具 2、输出参数勾选 3、结果分析 参数说明： c orig dest nbpath demand imped tottim fwaitime twaitime fboatime tboatime tinvtime tauxtime fboacost tboacost tinvcost tauxcost dist nboa 123 4653 1 0.001 66.31 42.29 2.50 4.00 2.00 4.00 23.11 11.18 2.00 2.00 0.00 0.00 20.37 2.00 | orig | 起点id | |—|—|...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_skim/",
        "teaser": null
      },{
        "title": "路网更新",
        "excerpt":"背景与路线 背景与问题 emme软件因为其在路网编辑方面功能弱，门槛高，技术复杂；在遇到局部路网更新，线路线型调整，属性赋值粘贴等问题时，工程技术人员往往需要在这方面投入巨大工作量，基于此，本文提出一种更新emme工程技术网络的方法。 技术路线与方法 三方软件编辑道路网络：可使用arcgis,gsis,Transcad等GIS软件 通过三方软件或者自定义脚本接口，将路网文件转化为中间脚本文件：线路拓扑及线型走向文件； 新建test sceneria 场景，通过EMME modduller工具文件，导入拓扑和线型文件；（也可以直接通过emme工具，将shp文件导入到emme中）； 坐标系转化，将导入的文件从经纬度左边转化为投影坐标； 利用modeller，将文件导出； 更新场景，将拓扑和线型文件导入新场景中， 手动编辑局部区域网络； 道路额外属性更新；# 基础网络处理 1）基于TC、arcgis、路网处理 2）EMME新建空工程； 3）使用工具shapefile to emme conversion 4）选择shp文件 5）属性选择 6）中间文件保存 node id编号，最好绕过已有编号区段； 基础文件保存basenet.in，点层和线层文件； shape线型文件保存:link_shp.db； emme文件导入和转换 1）定义方式类型 2）导入基础base文件，见上面basenet.in 3）修改线型数据： 将上文link_shp.db文件拷贝到emme工程文件目录Database下； 将link_shp.db文件名称修改为对于sceneria_id的名称，并覆盖之前的db文件； 4）线型文件坐标系转换 从shp导入的坐标系为WGS84的经纬度坐标要转化为墨卡托坐标系，转化方法如下： 源坐标：WGS1984.PRJ 目标坐标系：WGS 1984 UTM Zone 49N.prj 路径：emme安装路径下，coordinate systems/project coordinate systems/ 导入结果： emme文件导出 1）完成坐标系转化后导出为中间文件...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network_add/",
        "teaser": null
      },{
        "title": "基于AI算法的视频检测工具",
        "excerpt":"基于AI算法，实现基于视频、图片等的目标检测，涵盖标注，训练，识别等过程。 样本标注 界面与功能 本软件支持直接从视频、图片夹、单个图片中选择图标进行目标标注，软件界面与功能如下。 功能介绍 功能1：菜单选项，选择样本标记下的样本标记 功能2：通过视频进行标注，点击open,选择视频 功能3：对多张图片进行标注，选择文件夹，对文件夹中的图片进行标注，点击open,选择文件夹 功能4：对单张图片进行标注 功能5：选择标注类型，点击open class,选择class.txt文件 功能6：视频帧调整，滑动控件，自动调整视频帧；选择上一帧 or 下一帧，进行单张图片调整 功能7：预训练识别，选择已训练好的模型，进行预识别，提高标注效率 功能8：标注结果保存，选择保存路径和保存图片起点编号 功能9：交互画框标注，鼠标绘制方框，弹出类型，双击确认 功能10：显示标注结果，可进行手动修改与删除；点击结果保存，自动存下当前照片和标注结果。 软件操作步骤 通过视频进行标注 操作步骤如下： 1-&gt;2-&gt;5-&gt;6-&gt;8-9-10 步骤1：使用功能1，菜单样本标记下选择样本标记 步骤2：使用功能2，加载视频，自动显示加载视频名称 步骤3：使用功能5，加载标注类型文件class.txt,选择输出数据集格式yolo format 步骤4：使用功能6，调整视频帧，选择要标注的图片 步骤5：使用功能8，选择保存路径和设置图片起点编号（自然数） 步骤6，使用功能9，鼠标绘制方框，弹出类型，双击确认 步骤7，使用功能10，保存标注结果。 步骤8，回到步骤6，循环。 操作流程如下： 多张图片标注 操作步骤如下： 1-&gt;3-&gt;5-&gt;6-&gt;8-&gt;9-&gt;10 步骤1：使用功能1，菜单样本标记下选择样本标记 步骤2：使用功能3，选择图片所在文件夹，下方自动显示该文件夹的图片及名称，双击图片，自动在窗口11中显示 步骤3：使用功能5，加载标注类型文件class.txt,选择输出数据集格式yolo format 步骤4：使用功能6，调整视频帧，选择要标注的图片 步骤5：使用功能8，选择保存路径和设置图片起点编号（自然数） 步骤6，使用功能9，鼠标绘制方框，弹出类型，双击确认 步骤7，使用功能10，保存标注结果。 步骤8，回到步骤6，循环。 补充说明： 步骤3，选择含图片的文件夹 选择含图片的文件夹，下面方框中会显示所有的图片，滑动窗口，双击需要标注的图片，窗口11自动显示选择图片 单张图片进行标注 操作步骤如下： 1-&gt;4-&gt;5-&gt;6-&gt;8-&gt;9-&gt;10...","categories": ["tools"],
        "tags": [],
        "url": "/tools/Perspective/",
        "teaser": null
      },{
        "title": "如何更新github博客",
        "excerpt":"jekyll本地文件编辑      参考jekyll格式，进行本地文件编辑   配置好相关文件            配置_config.yml文件下scope目录，collections；       配置_data目录，_data/navigation.yml文件,每个知识库的链接       指定本地化文件输出路径：_config.yml-&gt;destination: docs           用jekyll进行本地化编译            bundle exec jekyll build           启动本地服务进行查看            bundle exec jekyll serve           github本地文件备份与上传     在待上传的目录外面，git init初始化git仓库   添加更改到缓行区，git add docs   提交更改到本地仓库：git commit -m “update”   推送更改到远程仓库：git push origin master   强制推送：git push origin main:master –force   ","categories": ["notebook"],
        "tags": [],
        "url": "/tools/gitbook-blog/",
        "teaser": null
      },{
        "title": "基础语法",
        "excerpt":"   authort:lhy     1、python与地理空间系统       地理信息系统（Geographic Information System或 Geo－Information system，GIS）有时又称为“地学信息系统”。它是一种特定的十分重要的空间信息系统。它是在计算机硬、软件系统支持下，对整个或部分地球表层（包括大气层）空间中的有关地理分布数据进行采集、储存、管理、运算、分析、显示和描述的技术系统。   地理信息系统（GIS，Geographic Information System）是一门综合性学科，结合地理学与地图学以及遥感和计算机科学，已经广泛的应用在不同的领域，是用于输入、存储、查询、分析和显示地理数据的计算机系统，随着GIS的发展，也有称GIS为“地理信息科学”（Geographic Information Science），近年来，也有称GIS为”地理信息服务”（Geographic Information service）。GIS是一种基于计算机的工具，它可以对空间信息进行分析和处理（简而言之，是对地球上存在的现象和发生的事件进行成图和分析）。 GIS 技术把地图这种独特的视觉化效果和地理分析功能与一般的数据库操作（例如查询和统计分析等）集成在一起。      来源于百度百科       常见空间数据标准格式：shapefile,DXF,DWG,DGN,ECW,MrSID,TIFF,JPG2000, KML, GML等   常见gis操作软件：arcgis,Qgis,transcad,emme,cad     2、python开发环境搭建       2.1、geopandas软件包安装      依次下载和安装三方软件包：gdal、Fiona、Pyproj、shapely            注：根据python软件版本下载对应版本的软件包，对于pip install package无法成功，需要手动下载三房软件包，下载网址：https://www.lfd.uci.edu/~gohlke/pythonlibs/#wordcloud            2.2、软件包手册      geopandas：https://geopandas.org/en/stable/getting_started/introduction.html   shapely：https://www.osgeo.cn/shapely/manual.html  ","categories": [],
        "tags": [],
        "url": "/tutorials/python/delixinxi/",
        "teaser": null
      },{
        "title": "环境配置",
        "excerpt":"python 程序开发过程 python程序的执行过程可分为3步，首先是源代码编写，其次是程序编译与执行，最后的程序的封装与打包。 在源代码编写阶段需要选择合适的编译器，选择解释器版本，设计好自己的工程目录。 编译阶段，会通过解析器将源码转化为字节码，再有虚拟机将字节码转化为机器语言，最后才在硬件上运行。与编译性语言（c/c++）相比，多出了编译和链接的过程，性能会下降；Python并不是每次都需要转换字节码，解释器在转换之前会判断代码文件的修改时间是否与上一次转换后的字节码pyc文件的修改时间一致，若不一致才会重新转换。 程序执行完以后，进行程序封装与打包，根据使用场景，进行不同的代码管理。其中或涉及程序封装，程序加密，版本管理等操作。 python编译器选择 PyCharm： 优点： 支持智能代码补全、语法高亮和错误提示等功能。 内置调试工具和版本控制功能，便于团队协作和代码调试。 集成了很多第三方插件和库，支持多种Python Web框架。 缺点： 相比其他Python IDE，PyCharm较为笨重，需要一定的计算机性能和内存支持。 部分功能需要付费使用。 教程：PyCharm官方文档 Visual Studio Code (VSCode)： 优点： 轻量级的文本编辑器，支持多种编程语言，功能丰富。 支持自定义快捷键和主题。 内置Python插件，支持调试、智能补全、代码重构等功能。 缺点： 对于Python开发来说，有些功能不够完善，如自动导入等。 不支持像PyCharm一样的智能提示。 教程：VSCode官方文档 Jupyter Notebook： 优点： 交互性强，可以边编写代码边做数据分析和可视化。 有丰富的扩展库，支持多种数据科学和机器学习任务。 便于与其他人分享笔记本和代码。 缺点： 对于大型项目的开发来说，不太方便。 不适用于生产环境。 教程：Jupyter官方文档 Spyder： 优点： 专门针对数据科学和计算机模拟等领域开发，集成了很多科学计算相关的库。 内置调试工具和变量查看器等功能。 缺点： 界面较为简单，可能不够美观和友好。 教程：Spyder官方文档 笔者最开始使用的是spyder，现在基本都以pycharm和jupyter notebook为主。 入门学习推荐spyder和jupyter...","categories": [],
        "tags": [],
        "url": "/tutorials/python/basic-th/",
        "teaser": null
      },{
        "title": "基础语法",
        "excerpt":"数据类型 python 除了通用的数值、字符、布尔值等外，常见的就是列表、元组、字典、集合等，不同的数据类型具有不同的特性。 列表（Lists），有序的元素集合，可以包含不同类型的元素，用方括号[]表示，例如[1, ‘a’, 3.14]，可以按照序号进行索引，切片。 元组（Tuples）：类似于列表，但是不可变，用圆括号() 表示，例如(1, ‘a’, 3.14)，不可变的是说元素值不能修改。 字典（Dictionaries）：键值对集合，用花括号{}表示，{‘name’: ‘Alice’, ‘age’: 25}。 集合（Sets）：无序的元素集合，元素唯一，用花括号 {1,2,3}，可以利用集合特性进行数据去重。 类与继承 在Python中，类（class）是一种创建对象和封装数据的方式。类可以包含属性（变量）和方法（函数）。继承是面向对象编程的一个核心概念，它允许我们创建一个类（称为子类或派生类）来继承另一个类（称为基类或父类）的属性和方法。 类的定义与使用： class ClassName: def __init__(self, param1, param2): self.param1 = param1 self.param2 = param2 def method1(self): # 方法体 pass # 创建类的实例 obj = ClassName('value1', 'value2') ClassName是一个类名，__init__是一个特殊的方法，称为构造函数，用于初始化新创建的对象的状态。self参数是对当前对象实例的引用。method1是类的一个普通方法. 类继承： # 定义基类 class BaseClass: def __init__(self,...","categories": [],
        "tags": [],
        "url": "/tutorials/python/basic-yufa/",
        "teaser": null
      },{
        "title": "基础语法",
        "excerpt":"创建git 1.安装Git 访问Git官方网站下载并安装Git。 安装完成后，在命令行中输入git –version来验证安装。 2. 初始化Git仓库 在项目目录中打开命令行，输入以下命令初始化Git仓库： git init 3. 添加远程仓库 如果你的项目托管在GitHub等平台上，你需要添加远程仓库： git remote add origin &lt;repository-url&gt; 替换为你的远程仓库URL。 4. 添加文件到仓库 添加文件到暂存区（staging area）： git add &lt;file&gt; 或者添加所有更改过的文件： git add . 5. 提交更改 提交暂存区的更改到本地仓库： git commit -m \"Your commit message\" 替换”Your commit message”为你的提交信息。 6. 查看状态 ● 查看仓库的状态： git status 7. 查看提交历史...","categories": [],
        "tags": [],
        "url": "/tutorials/python/git_branch/",
        "teaser": null
      },{
        "title": "数据加载",
        "excerpt":"文件路径操作：依赖包os 文件遍历 import os path = r'G:\\' filenames = os.listdir(path) for filename in filenames: #输出文件名 print(filename) #输出完整路径 print(os.path.join(path,filename)) 判断文件是否存在 if not os.path.exists(\"./images\"): os.makedirs(\"./images\") # 路径拼接 os.path.join(task_folder, \"input/\").replace(\"\\\\\", \"/\") 文件拷贝 def copy_files(input_path, output_path): \"\"\"将一个路径的所有文件拷贝到另一个路径下\"\"\" for files in os.listdir(input_path): name = os.path.join(input_path, files) back_name = os.path.join(output_path, files) if os.path.isfile(name): if os.path.isfile(back_name): if...","categories": [],
        "tags": [],
        "url": "/tutorials/python/data-add/",
        "teaser": null
      },{
        "title": "魔术函数",
        "excerpt":"python中的下划线是一个特殊的字符，主要有两种用法： function,前后两个下划线，表示python中的魔术方法； function,下划线前缀和后缀，表示内部使用或者非公开接口； 1、魔术函数 在Python中，双下划线（”__“）用于标识特殊的魔术方法（Magic Methods）或双下划线方法（Dunder Methods）。这些方法具有特殊的名称和用途，它们不是通常意义上的普通方法，而是在对象生命周期中由Python调用的特殊方法。以下是一些常见的双下划线方法及其用途： __init__：这是一个构造函数，在创建对象时自动调用，用于对象的初始化。例如： pythonCopy code class MyClass: def __init__(self, arg1, arg2): self.arg1 = arg1 self.arg2 = arg2 __str__：这个方法用于返回对象的人类可读的字符串表示，通常用于print函数或str()函数的输出。例如： pythonCopy code class MyClass: def __str__(self): return f\"MyClass instance with attributes: {self.arg1}, {self.arg2}\" __repr__：这个方法用于返回对象的”官方”字符串表示，通常用于开发和调试中。例如： pythonCopy code class MyClass: def __repr__(self): return f\"MyClass({self.arg1}, {self.arg2})\" __len__：这个方法用于返回对象的长度，通常用于内置的len()函数。例如： pythonCopy code class...","categories": [],
        "tags": [],
        "url": "/tutorials/python/magic_function/",
        "teaser": null
      },{
        "title": "邮件发送",
        "excerpt":"1、邮件发送 # -*- coding: utf-8 -*- \"\"\" Created on 2020622 author:lhy 功能：发送信息到邮箱 \"\"\" import yagmail def send_message_by_email(message): \"\"\" 发送消息到邮箱 :param message: :return: \"\"\" yag = yagmail.SMTP(user='****@163.com', password='EPDDPCXHPBZCXMXC', host='smtp.163.com') # 发送邮件 yag.send(to=['****@qq.com'], subject='wuhan_model_error', contents=message) def send_file_by_email(subject, file_name): \"\"\" 发送文件到邮箱 :param subject: :param file_name: :return: \"\"\" yag = yagmail.SMTP(user='****@163.com', password='EPDDPCXHPBZCXMXC', host='smtp.163.com') #...","categories": [],
        "tags": [],
        "url": "/tutorials/python/email-send/",
        "teaser": null
      },{
        "title": "错误提示",
        "excerpt":"1、自定义错误 1) model_error.py # -*- coding: utf-8 -*- \"\"\" Created on Mon Sep 28 10:40:13 2020 自定义模块计算错误类 # @author: lhy # @Time : 2020/12/31 11:19 # @email : 742232975@qq.com \"\"\" class ModelError(Exception): \"\"\" 自定义错误类型 \"\"\" pass class FileError(ModelError): \"\"\" 文件输入类型错误 \"\"\" def __init__(self, key_error, error_message): self.message = \"{0}:{1}\".format(key_error, error_message) def...","categories": [],
        "tags": [],
        "url": "/tutorials/python/error_info/",
        "teaser": null
      },{
        "title": "ftp文件传输",
        "excerpt":"1、ftp文件上传和下载 # -*- coding: utf-8 -*- \"\"\" Created on 20201027 author:lhy #从ftp服务器下载文件 1&gt; 出行生成 \"\"\" from ftplib import FTP import os import traceback HOST = \"*.*.*.*\" USERNAME = \"model\" PASSWORD = \"***\" POER = \"1004\" class FtpObject(object): \"\"\"从ftp服务器读取文件\"\"\" def __init__(self, host, username, password, port): \"\"\" 初始化ftp :param host: ftp主机ip :param...","categories": [],
        "tags": [],
        "url": "/tutorials/python/ftp/",
        "teaser": null
      },{
        "title": "模型分块",
        "excerpt":"from itertools import islice  def chunk_list(it,limit):     it = iter(it)     return iter(lambda:list(islice(it,limit)),[])  ","categories": [],
        "tags": [],
        "url": "/tutorials/python/islice/",
        "teaser": null
      },{
        "title": "bat批命令",
        "excerpt":"1、常见路径处理 1）cmd下进入某磁盘 先敲盘符； 在输入cd: E:\\pathcmd进入某目录 ```bash C:\\Users\\Administrator&gt;e: E:&gt;cd E:\\jupyter_app E:\\jupyter_app&gt; **2）bat常见路径相关命令** - %~dp0[获取当前路径] “d”为Drive的缩写，即为驱动器，磁盘、“p”为Path缩写，即为路径，目录 ```bash cd %~dp0 ：进入批处理所在目录 cd %~dp0bin\\ ：进入批处理所在目录的bin目录 %cd%[执行的路径]&gt; cd /d D:\\bat：进入D盘 某目录，如果已经在D盘则不需要/d命令;（/d不是盘符是路径） 执行路径和当前路径不一样； @rem cd %~dp0 cd /d D:\\bat start call print.bat echo %cd% echo hello world pause 2、bat常见命令 2.1、Echo 命令# 语法: echo [{on|off}] [message] ECHO...","categories": [],
        "tags": [],
        "url": "/tutorials/python/bat/",
        "teaser": null
      },{
        "title": "管道",
        "excerpt":"1、管道 1.1、什么是管道？ 管道在python中就是按照序列依次执行函数，前一个函数的输出作为下一个函数的输入。在表达形式上，更为简介。 ex：依次调用3个函数： def funtion_1(str): return str def funtion_2(str): return str def function_3(str): return str def pipline(str,function): return reduce(lambda x,y:y(x),function,str) if __name__ == \"__main__\": str1 = \"abcd\" # 依次调用 s = function_1(function_2(function_3(str1))) # 管道调用： result = pipeline(str, [function_1, function_2, function_3]) 1.2、fastcore包： 比较成熟的包fastcore,含有现成的pipline,无需自己写。 from fastcore.transform import Pipeline input_string = \"IT-is-a-test\\n\"...","categories": [],
        "tags": [],
        "url": "/tutorials/python/pipline/",
        "teaser": null
      },{
        "title": "自动注释",
        "excerpt":"技术路线：sphinx 1、sphinx简介 sphinx是一种基于python的文档工具，可以基于python源码中的注释，生成单独的接口文档。 2、文档生成 2.1、安装sphinx pip install sphinx # 安装包 pip install sphinx_rtd_theme # 安装主题包 2.2、生成模板 新建doc目录： 终端进入doc目录：cd ./doc 输入：sphinx-quickstart，根据需要输出选项； ```python Separate source and build directories (y/n) [n]:y # 源文件和目标文件分开 The project name will occur in several places in the built documentation. Project name: mymodel # 项目名称 Author name(s): lhy...","categories": [],
        "tags": [],
        "url": "/tutorials/python/sphinx/",
        "teaser": null
      },{
        "title": "XML文件格式解析",
        "excerpt":"1、xml文件基础  每个element对象都具有以下属性：     tag：string对象，表示数据代表的种类。   attrib：dictionary对象，表示附有的属性。   text：string对象，表示element的内容。   tail：string对象，表示element闭合之后的尾迹。   若干子元素（child elements）。   &lt;tag attrib1=1&gt;text&lt;/tag&gt;tail   1     2        3         4   2、解析XML文件   ","categories": [],
        "tags": [],
        "url": "/tutorials/python/XML/",
        "teaser": null
      },{
        "title": "内存硬盘监控",
        "excerpt":"import psutil import logging logger = logging.getLogger(__name__) def check_memory_space(): total_G = psutil.virtual_memory().total/1024/1024 free_G = psutil.virtual_memory().free/1024/1024 used_G = psutil.virtual_memory().used /1024/1024 logging.info(\"total memory is {},free memory is {},used memory is {}\".format(total_G,free_G,used_G)) # return total_G, free_G, used_G def check_disk_space(path): \"\"\" 磁盘剩余空间检测 :return: \"\"\" disk_id = path.split(\"/\")[0] size_disk = psutil.disk_usage(disk_id) total_G = size_disk.total /...","categories": [],
        "tags": [],
        "url": "/tutorials/python/memory_space/",
        "teaser": null
      },{
        "title": "pandas应用",
        "excerpt":"1、pandas介绍 作为数据处理基础三件套（numpy、pandas、matplotlib）之一，Pandas库是一个免费、开源的第三方 Python库，是Python数据分析必不可少的工具之一。 pandas的设计初衷就是想复现在excel的功能并对其进行功能扩展。所以大部分excel能做的，pandas都能做，很多excel不能做的，pandas也能做。实话，要是excel对python的支持更好一点，如果VB的功能完全演变成python的接口，可能大部分工作直接excel就搞定了。excel还有的一个bug就是大文件数据无法操作。 2、pandas常见的功能 pandas安装，任意百度关键词 两种数据结构：series，dataframe series:有点类似于字典，可以由字典转化而来 import pandas as pd import numpy as np data = np.array(['a','b','c','d']) s = pd.Series(data，index=[2,3,4,7]) print(s) Out: 2 a 3 b 4 c 7 d dtype: object dataframe结构DataFrame 一个表格型的数据结构，既有行标签（index），又有列标签（columns），它也被称异构数据表，所谓异构，指的是表格中每列的数据类型可以不同，比如可以是字符串、整型或者浮点型等。如下图所示：整体结构和excel比较类似，左侧为行索引 ，上标题为列名。 3、dataframe常见操作 pandas的数据读取 Format Type Data Description Reader Writer text CSV(opens new window) read_csv...","categories": [],
        "tags": [],
        "url": "/tutorials/python/pandas/",
        "teaser": null
      },{
        "title": "numpy应用",
        "excerpt":"1、numpy介绍 pandas的操作就像excel进行数据处理一样，而numpy则是专注了数值计算。 2、numpy库的安装与使用 pip install numpy impor 3、数学操作 数据创建 ```python import numpy as np a = np.array([1,2,3]) print(a) 创建特殊数组 b = np.zeros((3,5)) ones_array = np.ones((2, 2)) full_array = np.full((2, 2), 8) - 数据切片 - 数组形状修改 ```python reshaped_array = a.reshape((1, 5)) 元素级别的加法、数组乘法，矩阵乘法 ```python 元素级别的加法 c = a + 10 print(c) 数组乘法（元素级别）...","categories": [],
        "tags": [],
        "url": "/tutorials/python/numpy/",
        "teaser": null
      },{
        "title": "matlpotlib可视化",
        "excerpt":"1、matplotlib Matplotlib是python的一个可视化库，用来绘制各种静态，动态，交互式的图表，应用广泛。 Matplotlib 可以绘制线图、散点图、等高线图、条形图、柱状图、3D 图形、甚至是图形动画等等。 1.1、Matplotlib的安装 pip更新：python -m pip install -U pip 安装： pip install -U matplotlib 应用：import matplotlib.pyplot as plt 1.2、Matplotlib的基本要素 x轴和y轴 水平和垂直的轴线 x轴和y轴刻度 刻度标示坐标轴的分隔，包括最小刻度和最大刻度 x轴和y轴刻度标签 表示特定坐标轴的值 绘图区域 实际绘图的区域 2、Matplotlib基础 Matplotlib有两种画图形式，面向对象和pyplot接口。 2.1、pyplot形式 输入： import matplotlib.pyplot as plt import numpy as np x = np.array([0, 2, 10]) plt.figure() plt.plot(x, x**2)...","categories": [],
        "tags": [],
        "url": "/tutorials/python/matlpotlib/",
        "teaser": null
      },{
        "title": "多进程管理",
        "excerpt":"1、多进程技术 from multiprocessing import Process import os # 定义要调用的方法 def async_fun(name, add): for arc in add: print(name + str(os.getpid()) + \" \" + arc) if __name__ == '__main__': my_tuple = (\"你好\", \"今天是个好日子\", \"天气真不错\") # 创建进程 process = Process(target=async_fun, args=(\"子进程\", my_tuple)) # 启动子进程 process.start() # 启动主进程 async_fun(\"主进程\", my_tuple) import multiprocessing import...","categories": [],
        "tags": [],
        "url": "/tutorials/python/mul-process/",
        "teaser": null
      },{
        "title": "多线程管理",
        "excerpt":"1、多线程技术 1.1、多线程基础 import threading import time exitFlag = 0 class myThread (threading.Thread): def __init__(self, threadID, name, delay): threading.Thread.__init__(self) self.threadID = threadID self.name = name self.delay = delay def run(self): print (\"开始线程：\" + self.name) print_time(self.name, self.delay, 5) print (\"退出线程：\" + self.name) def print_time(threadName, delay, counter): while counter: if exitFlag: threadName.exit() time.sleep(delay)...","categories": [],
        "tags": [],
        "url": "/tutorials/python/mul-threads/",
        "teaser": null
      },{
        "title": "日志记录",
        "excerpt":"python 日志输出记录通常采用内置的模块logging，其提供灵活的方式来输出日志信息，并且可以搭配不同的日志级别和输出格式。 1、日志操作基本步骤 1.1、模块导入 import logging 1.2、日志配置 设置日志级别，包括：DEBUG、INFO、WARNING、ERROR和CRITICAL。日志级别不仅用于标识消息的重要性，还用于控制日志的输出。当你设置一个日志器（Logger）或日志处理器（Handler）的级别时，只有等于或高于该级别的日志消息才会被处理和输出。 DEBUG：级别10，输出详细的信息，通常用于问题诊断。在开发和测试阶段非常有用，但在生产环境中可能会产生大量日志。 INFO：级别20，输出一般性的信息，如程序运行的状态、处理进度等。适合在生产环境中提供程序运行的概览。 WARNING：级别30，输出潜在的问题，但不会立即影响程序运行。例如，当某个操作可能不是最优解或者某些条件未满足时。 ERROR：级别40，输出由于严重问题导致的错误，这些错误可能会影响程序的部分功能，但不会导致程序完全停止。 CRITICAL：级别50，输出非常严重的问题，如程序无法继续运行的情况。这是最高级别的日志，通常用于报告紧急情况。 设置日志的格式，包括时间戳、日志级别、消息等。日志格式是通过Formatter类来设置的，它允许你指定日志消息的布局。 %(name)s: 显示日志器的名字。 %(levelno)s: 显示日志级别数字。 %(levelname)s: 显示日志级别名称（如INFO、ERROR等）。 %(pathname)s: 显示日志消息定义的文件的完整路径。 %(filename)s: 显示日志消息定义的文件的名称。 %(module)s: 显示包含日志消息的模块的名称。 %(lineno)d: 显示日志消息定义的代码行号。 %(funcName)s: 显示日志消息定义的函数的名称。 %(created)f: 显示当前的时间戳。 %(asctime)s: 显示时间，格式为%Y-%m-%d %H:%M:%S,uuu。 %(msecs)d: 显示毫秒。 %(relativeCreated)d: 显示自Logger创建以来的毫秒数。 %(thread)d: 显示线程ID。 %(threadName)s: 显示线程的名称。 %(process)d: 显示进程ID。 %(message)s: 显示日志消息。 formatter = logging.Formatter('%(asctime)s...","categories": [],
        "tags": [],
        "url": "/tutorials/python/log-book/",
        "teaser": null
      },{
        "title": "minio文件传输",
        "excerpt":"MinIO是一个高性能的分布式对象存储系统，它兼容Amazon S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等 minIO服务安装与启动 参考教程minio安装 基于python的在线文件传输 # -*- coding: UTF-8 -*- \"\"\" Created on 2021 - 12 - 15 # @ 功能： 从minio上传和下载文件 # @author: lhy # @file: get_file_from_minio.py # @time: 2021/12/15 15:39 # @email: 742232975@qq.com \"\"\" from minio import Minio from minio.error import ResponseError import os import traceback import logging...","categories": [],
        "tags": [],
        "url": "/tutorials/python/minio/",
        "teaser": null
      },{
        "title": "装饰器",
        "excerpt":"1、装饰器定义 装饰器(Decorators)是 Python 的一个重要部分。简单地说：他们是修改其他函数的功能的函数。 要理解装饰器，首先理解对象，函数的嵌套 1.1、万物皆对象 def hi(name=\"yasoob\"): return \"hi \" + name print(hi()) # output: 'hi yasoob' # 我们甚至可以将一个函数赋值给一个变量，比如 greet = hi # 我们这里没有在使用小括号，因为我们并不是在调用hi函数 # 而是在将它放在greet变量里头。我们尝试运行下这个 print(greet()) # output: 'hi yasoob' # 如果我们删掉旧的hi函数，看看会发生什么！ del hi print(hi()) #outputs: NameError print(greet()) #outputs: 'hi yasoob' 1.2、函数中定义函数 def hi(name=\"yasoob\"): print(\"now you are inside...","categories": [],
        "tags": [],
        "url": "/tutorials/python/decorator/",
        "teaser": null
      },{
        "title": "理论基础",
        "excerpt":"1、Tour Base Model的核心理念：      需求模型一定要以人为中心，模型一定是行为模型，它体现的是个人的行为方式选择。人是城市活动的主体参与者，所有的活动的分析，都应该落在人身上。在Tour Base Model的计算步骤，出行链生成之后，跟着的是目的地选择， 方式选择，时间划分（或者可以是时间选择），这些步骤都充分体现的是人的行为心理。而传统的四阶段都是出行生成，交通分布，方式划分，交通分配，都是从集计的角度而言， 从理念上是没有完全体现出人的行为心理。   需求模型一定是全天24小时的分析，交通分配过程可以只有高峰小时。全天的出行绝大多数都是闭环的，从家出发去上班，然后下班回家，所以Tour Base Model考虑的 出行单位是Tour的链条，是起终点重合的闭环，交通分配过程不是全天的，我们将全天划分为5个时间段，每个时间段都单独进行分配，不同时间段的阻抗是不一样的，时间段越多，越细致，当然资源消耗也越多。   收敛的标准一定是需求模型和分配模型之间的收敛。收敛的指标项中，必须包含需求的参数和分配的参数，这样的收敛才是宏观模型的收敛。传统上我们在外循环上把前后两次的 需求差小于收敛值当作模型的收敛，实际上这只是需求的收敛，或者是把外循环前后两次的阻抗差小于收敛值当作模型的收敛，实际上这只是供给模型的收敛，Tour base Model追求的是需求和供给的双收敛。   模型计算的过程和方法一定是透明的，可解释的。交付给业主的模型必须是可解释的，透明的，不能是黑箱子。   2、tour base的优势      从实践的角度而言，Tour Base Model的框架是既能向上兼容，又能向下兼容，可扩展性强。   对人群的分组，如果是集计的，类似于四阶段模型，如果人群分的足够细致，那就是基于个体的活动的模型，扩展性强；   目的的选择，在完成主目的地的选择之后，在起点和目的地之间可以插入多个子目的地，这种橡皮筋模型，可以模拟多段的出行；   Tour Base Model的出行也能计算E2I和I2E的这种半程出行链，从技术框架上来说，可以兼容；   参数解释性强，可伸缩可扩展：效用最核心的参数只有P1-P8，每个参数的取值范围都是在经验值的基础上进行调整，每个参数都具有解释器，不可解释项， 模型无法考虑的影响因素都包含在了常数项里面，不会像四阶段一样，引入K参数，摩擦系数之类的。并且这套参数贯穿在了目的地选择，方式选择之中， 是递进的关系。四阶段容易割裂彼此之间的关系。严格来说，模型可调的参数越少，解释性越强，模型越简单，反之参数越多，越复杂。参数的标定与数据基础息息相关， Tour Base Model的很多参数都是基于人群，基于目的，基于方式，基于地带的，数据越精细，数据质量越好，可标定的类别就越多，若数据质量一般，则很多类别可共用相同参数。   集计和非集计模型：Tour Base Model严格意义来说，还是集计的模型，考虑的还是群体，而不是个体的出行，之前和向老师讨论的时候，大家都觉得，中国的人群出行，具有较强的一致性；工作日 大部分人都遵循早上高峰上班，晚高蜂下班，大多都是围绕通勤的出行，群体性很强，在大城市中特别的明显，ABM的个体出行，并不一定适合中国的国情。   3、主要内容   宏观交通出行需求预测模型的构建主要包括四个方面，最核心的模块是供给模型和需求模型：     数据基础：调查数据及分析，卡口、电警、刷卡、GPS等数据及分析，人口合成模型，人口和土地模型等；   供给模型：小区，道路网络，公交网络，TC网络处理，EMME工程构建，交通分配设置，公交分配设置；   需求模型：出行链生成，效用计算，目的地选择，方式选择，时间划分，MSA和收敛判断   其他：参数标定与校核，report统计，参数敏感性与弹性分析   3.1、模型框架图     3.2、程序计算流程图     ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/tourbase/",
        "teaser": null
      },{
        "title": "出行链生成",
        "excerpt":"出行链生成模型是研究人员出行链产生的总量模型，是交通需求分析工作中最基本的部分。 出行链的发生受社会经济、人口岗位、土地利用、机动车发展水平等多种因素的影响。 0、基本定义 活动（activity）：个体为了满足自身或家庭在经济方面的、生理方面的和社会等方面的需要，而在某件事情中的实体参与； 出行（trip)：基于活动目的，采用一种或多种交通方式从一个地点到另一个地点的过程，例如：家-单位的上班出行（HB Work）、购物-家的购物回家（HB Shop）、单位-客户（FB Business）等； 活动链（activity chain）:以24小时为单位，将出行者一系列活动按照先后顺序依次连接起来所形成的链条。 出行链（tour)：从起点出发, 经过若干中途停留点后, 最终返回起点的一连串出行组合，如家-单位-家（HWH）、单位-餐厅-单位（FEF）等； 基家（HB tour）&amp; 非基家（NHB tour）出行链：起终点都是家的出行链；起终点不是家的出行链为非基家出行链。 主要停留点（PD，Primary Destination）：指优先级最高（如通勤）或耗时最长或距离起点最远的活动的中间停留点。 次要停留点（SD，Secondary Destination ）：指PD以外的中间停留点，如Home-Escort-Work-Home中的Escort。 简单链：仅有一个中间停留点的出行链，如HWH； 复杂链：中间含有两个及以上的中间停留点的出行链，例如：HWSH(家-工作-购物-家),HCWH(家-送孩子上学-工作-家）； 去程（前半程）：出行链起点到主要停留点的半程，例如：HWH的HW；HCWH的主要停留点为work,前半程链为HCW。 回程（后半程）：出行链主要停留点回到起点的半程，例如： HWH的WH；HWSH的主要停留点为work,后半程链为WSH。 半程（half tour)：24小时内无法回到起点的tour，不含起点，仅1个停留点; 基本出行链：从调查的出行链中归并、筛选后，用于分析与出行链建模的出行链。 1、人群分组参考 工作人群 高收入有车 中收入有车 中收入无车 低收入有车 低收入无车 特殊群体： 农民 大学生 中学生 小学生 退休人员 2、出行链理论 出行链目的类型参考 基于家的出行 基于家的工作再回家（HWH，Home-Work-Home） 以家为起点出发去工作，在当天工作结束后从工作地点返回家的出行链。 基于家的上小学再回家（HEH，Home-Education-Home） 以家为起点出发去上小学，在当天学习结束后从学校返回家的出行链。...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/tour-generate/",
        "teaser": null
      },{
        "title": "效用计算",
        "excerpt":"0、效用理论 效用（Utility），是经济学中最常用的概念之一。一般而言，效用是指对于消费者通过消费或者享受闲暇等使自己的需求、欲望等得到的满足的一个度量。 总效用是指消费者在一定时期内，消费一种或几种商品所获得的效用总和。 边际效用是指消费者在一定时间内增加单位商品所引起的总效用的增加量。 效用理论是决策者进行决策方案选择时采用的一种理论。决策往往受决策者主观意识的影响，决策者在决策时要对所处的环境和未来的发展予以展望， 对可能产生的利益和损失作出反应，在公理科学中，把决策者这种对于利益和损失的独特看法、感觉、反应或兴趣，称为效用。 1、出行trip的效用 由交通分配或者skim过程获取的道路阻抗，表征的是某段时间，采用某种方式，从空间的某一位置到空间的另一位置所花费的时间成本，费用成本，距离成本等，而这种 成本如何转化为效用，我们知道，效用是决策者的主观意识，主观感受与评价，因此由成本到效用的过程，采用的参数，针对不同类型的决策者，对于不同的出行链，采用的参数应该是不一样的。 出行（trip）效用综合考虑了出行总时间，总费用和距离三方面因素，各种费用通过的时间价值转化为时间,再转化为效用。 计算公式如下： 其中： 2、tour的效用计算 和传统的四阶段模型只考虑trip的效用不同，基于出行链模型考虑的是整个链条的效用，这样能模拟前后两个出行trip之间的相关性，体现了出行行为方式的闭环，提高模型的精度。 一般而言，大多数出行，去程和返程的交通方式变换的不多。方式切换的概率大概在10%左右。Tour Base Model的框架，允许考虑方式切换的状况，只是对计算机资源消耗会很严重。 武汉活动链模型将去程和回程的出行方式分别进行了考虑。将出行链去程的方式(m)定义为主方式，主方式选择只面向去程方式选择。 方式切换选择示意图： 作为Car_Driver的出行，默认去程和返程的交通方式是一致的。一般而言，很少有早上开车出去，下午选择其他方式返程的。其他的交通方式都是可以切换的。 2.1、去程和返程方式一致 当去程和返程的交通方式一致，如Car_Driver的出行，早上开车去上班，下午开车回家，去程和返程都采用Car_Driver。具体计算公式如下 其中： —— 分别代表出行目的为p，人群类型为c时，对于方式m，TAZ(i)和TAZ(j)间去程和回程的效用；因为考虑的是整个Tour的效用，因此将去程和回程的效用相加后，需要乘以参数0.5，保持量级不变。 2.2、去程和返程方式不一致 当主方式m为可变方式时，出行链方式选择需要在进行主方式选择后，再进行回程的从属方式选择。对于出行链， 需要通过计算全部方式组合下去程和回程的效用，通过加权得到全天的平均效用值。 例如：早上选择了打车上班，下午下班回家的交通方式可以选择：坐公交、坐便车（Car_passenger）、慢行等，一般而言，，去程的效用即是主方式（打车）的效用，返程的效用则是 坐公交、坐便车（Car_passenger）、慢行等多种方式的效用的logsum值。 具体计算公式如下： ——在可变方式出行的情况下，mix类型中与去程方式不同的其他三种出行方式。大多数出行链的去程方式和回程方式是一致的。因此，模型中设定了一组固定参数作为往返同方式和往返不同方式在计算回程效用时的权重值， 分别对应以主方式返回和以混合方式返回。 回程方式的Logsum过程定义如： U_{j i p c m * t} r表示返程方式总的效用，由返程所有方式的logsum计算得到。计算方式如下： 3、目的地效用计算 目的地选择的效用用于出行量的目的地选择计算，效用值越大，选择的可能性就越高。表示c类人群基于类目的从小区到小区的效用。 包含两个部分，前半段为子过程即目的地选择的下一层——方式选择部分的全部方式的值，即不同出行方式基于Tour的效用值, 累加后的。该部分的对应的权值参数为；后半段为对应目的下目的地规模变量（）的对数值 以及对应每一个的系数。计算公式如下： U_{ijpc}=β_{dpc}ln(\\sum_me^{U_{ijpcm}})+ln(\\sum_kσ_{jpk}∗ SizeVariable_{jpk}) 只有单约束的非刚性出行，在计算效用时才采用SizeVariable；...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/utility-calculate/",
        "teaser": null
      },{
        "title": "目的地选择",
        "excerpt":"出行目的选择模型为集计模型，用以确定每个TAZ的出行者选择不同出行终点的概率。模型通过考虑周边交通小区的工作岗位数、学校学位数、与娱乐相关的土地面积等，确定不同人群、出行目的选择周边交通小区的概率。 宏观交通模型中TAZ众多，被选择为出行目的地，需要考虑的因素很多，如目的地TAZ小区的大小/吸引量，起点TAZ到目的地TAZ的距离/阻抗，与目的地TAZ相关的常数项（ASC）等因素。 1、主目的地选择 按照国际通行的最佳方式，对于不同类型（按出行目的分）的出行链，需要满足的约束条件不同： 对于通勤（HWH）和通学（HEH）这两类刚性出行链，在主目的地选择过程中，两类出行的数量应等于对应目的地的岗位/学位数量，因此需要采用双约束（Doubly constraint）的方式，使得最终生成的出行链（Tour）同时满足家庭端和工作地/学校端的条件约束。 对于其他非刚性的出行（即非HWH或HEH的出行），只需采用单约束条件（Singly constraint），满足出行生成端（家庭或工作地）的条件约束。 1.1、单约束目的地选择 主要是针对非刚性出行，满足出行生成端的约束。 P_{ijpc}=\\frac{e^{θ^d_{pc}}∗U_{ijpc}}{\\sum_je^{θ^d_{pc}∗U_{ijpc}}} 1.2 双约束目的地选择 双约束条件下的目的地选择，以logsum的二维矩阵为基础(seed matrix),通过IPF过程来满足出行产生端和出行吸引端两端的约束平衡。 1.2.1、约束平衡问题 在模型中允许通过三种不同的预处理方式来满足IPF过程对于产生和吸引两端总量达到一致的前提约束： 使用出行产生端的总量作为平衡条件下的总量； 目的地端的对应岗位总量作为平衡条件下的总量； 同时调整两端的量，获得一个中间的平衡点作为总量； 1.2.3、长方形双约束与正方形双约束 长方形双约束：主要针对工作通勤而言，基于TAZ的数据统计维度，常常能获取不同类别的工作人群，比如说高收入，中收入，低收入，但是对于岗位，很难从 调查或者其他大数据获取某个TAZ的高收入岗位数是多少，中收入岗位数，低收入岗位数是多少，因此针对工作通勤，需要将多个不同收入的人群的阻抗矩阵拼凑起来，形如长方形，(zn)n维，同时满足行 不同收入人群的人数和总岗位的约束。 正方形约束：主要针对通学而言，既满足产生端学生人数的约束，又满足吸引端学位的约束。 1.2.2、双约束计算 对于双约束条件下的目的地选择，概率计算公式如下： P_{ijpc}=\\frac{B_{jp}e^{θ^d_{pc}}∗U_{ijpc}}{\\sum_jB_{ip}e^{\\theta^d_{pc}*U_{ijpc}}} 其中：B_{jp} —— 对于目的地为TAZ(j)且目的为p（上班/上学）的平衡系数，该系数表示了IPF过程的调整结果。 由上，目的地选择得到的出行需求计算如下式： DayTourD_{ijpc}=P_{ijpc}∗ DayTourD_{ipc} 对于单约束和双约束下的目的地选择模型，均满足小区出去总量等于所有小区对该小区吸引的总量，满足公式如下： DayTourD_{ipc}=\\sum_jDayTourD_{ijpc} 2、中间停留点选择——橡皮筋模型 前面提到，出行链的类别除了HWH，HOH等只包含主要目的地的简单两段出行链外，还具有HCWH，HWSH等含有中间停留点的出行链。 含有中间停留点的出行链建立在主链构建的基础上，即HCWH的出行，是针对某一类上班的人群，在从家到工作地上班的半程出行链过程中，还含有送孩子上学的需求， 送孩子上学的目的地应建立在选定主目的地work之后,因此，对于Home端和work端已经固定的基础上，去选择送孩子上学的目的地，类似于固定了橡皮筋的两端（home,work）, 然后中间的shcool端是可以不断拉伸的,拉伸的越远，阻抗越大，反之则越小。 集计出行链模型允许在主目的地选择的基础上增加次目的地选择建模，在去程和回程中间，基于橡皮筋法，对中间停留点基于广义阻抗实现MNL目的地选择， 并且假设中间停留点的方式选择与对应的去程/回程方式保持一致。 经验总结 hwh采用长方形的双约束，因为产生量可以细分为高、中、低、有车、无车等不同人群，而岗位无法得知是高收入岗位还是低收入岗位，因此双约束计算时， 只能采用多个矩阵一起实现长方形双约束； 小学生人口数据没有学位数据准确，以学位数据为准，以社区为边界，完成同一社区的学生和学位的平衡； 小学生，中学生，大学生的上学属于正方形的双约束 其他出行目的都是单约束； hwh的出行具有强约束性，而实际情况中，我们想拥有精确人口和岗位是不现实的，可能需要对局部区域引入factor进行调整；...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/destination-choice/",
        "teaser": null
      },{
        "title": "中间停留点模型",
        "excerpt":"橡皮筋模块的原理  橡皮筋模块应用于主目的地选择后，出发端（或主目的地端）与主目的地端（或出发端）之间的停留点选择，即Intermediate Stop after Tour Main Destination 橡皮筋模块通过度量中间停留点与原本出发端（或主目的地端）与主目的地端（或出发端）线路之间的空间偏移程度，完成中间停留点的选择。 本文的集计出行链模型允许在主目的地选择的基础上增加次目的地选择建模，在去程和回程中间，基于橡皮筋法，对中间停留点基于广义阻抗实现MNL目的地选择， 并且假设中间停留点的方式选择与对应的去程/回程方式保持一致。  1、特殊的停留点模型：HCWH(家-送小孩上学-上班-回家)与HCWCH（家-送小孩上学-上班-去学校接小孩-回家）  以对早高峰影响最大的父母在上班过程中顺路驾车送子女上学为例进行说明（HCWH: Home-Children-Work-Home）。 符号说明      对于集计HCWH出行链，父母开车上班途中的学校停留点建模基于集计出行链的主方式选择、国内学区划分和校门口实载率可观察的特征，以下面方法实现：      1）基于出行链计算方法，完成上班（HWH）和上学（HEH）的集计出行链的主方式选择。   2）对于出行链HCWH的前半段，即去程OD点对（i,j）中间小区s（i→s→j）的考虑，模拟方式视为路径中间停留点TAZ(s)的选择。 假设学生和家长前往学校TAZ(s)的比例都是 PCPis，即当乘车上学的出行比例在所有出行方式中为PCPis，同样的比例家长从TAZ(i)驾车前往TAZ(s)。（如果后续数据支持，这个比例可以作为基于TAZ的变量）。   初步估计送孩子前往TAZ(s)的总量为：  n^{CD}{isj}=P^{CP}{is}∗(α^{CD}∗N^{CD}_{ij})   初步估计到学校s的总量为：Totals^{CD}s=\\sum_i\\sum_jn^{CD}{isj}      假设家长接孩子的回程方式对称，其计算方法与这个公式的证明过程因为篇幅略去。      重要假设   假设送孩子上学的人群都是有车使用者，学生上学的方式都是以Car_passenger的出行方式，送学生的家长都是Car_driver的出行方式，实现小汽车的合乘,主要考虑早高峰对道路影响最大的是开车送孩子上学的这部分出行；   假设对于同一个TAZ，学生到不同学校所在TAZ的比例与送家长孩子上学选择的中间停留点的taz比例一致，与每一个i-j pair(home-work)选择中间停留点学校s所在TAZ的比例一致；   假设送孩子上学的比例与学生坐车上学的关系与学校所在的TAZ的学生实载率率有关；   对于αCP*2*CD**s 交通小区TAZ(s)各个学校门口可以观察到的平均停车实载率s是关于学校所在taz的学生实载率，不是关于起点i的实载率，实践过程，很难获取关于起点的，关于学校的实载率，更容易获取;### 2、普通的停留点模型：以HWAH为例 HWEH的建模是对于HWH类型出行链主方式和回程方式选择完成以后，在回程途中增加停留点（与HCWH相似）。 对于HWEH型出行链的回程部分，潜在的中途停留点q的个数是有限的（比如10个）。令回程点对（ji）中的全部可能中途停留点的集合为Q（q∈Q），Q即是对应的心理边界。   2.1、含有停留点的效用计算  在从TAZ(j)返回TAZ(i)的途中，由中途停留点q（q∈Q）产生的阻抗可以由如下方式计算： IMP_{jicmrq}=[IMP_{jqcmr}+IMP_{qicmr}]−IMP_{jicmr}   模型假设每一位出行者在确定中途停留点时，都以最小化出行总费用为目标。中途停留点所在TAZ对应的SizeVariable与主方式选择过程中使用的保持一致。 对于停留点为q的回程出行，效用计算如下：  U_{jicmrq}=β^d_{pc}∗IMP_{jicmrq}+ln(SizeVariable_{pcq})   2.2、停留点的选择与trip计算  在完成效用计算后，使用标准的单约束目的地选择来确定中途停留点p对应的TAZ。 P_{isjpc}= \\frac{e^θ_{dpc}∗U_{ijpc}}{∑je^{θ^d{pc}∗U_{iqjpc}}}         重要假设   假设前半程出行链（HCW-H）的出行时间与主链(HW-H)的去程时间一致，后半程出行链(H-WCH)的出行时间与主链（H-WH）的回程时间一致；   假设同一人群的主链（HWH）中含有中间停留点（HCWH）出行的比例，在同方式同时间段下比例一致；   主要考虑主城区含有的中间停留点的出行  ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/Intermediate-stop/",
        "teaser": null
      },{
        "title": "半程出行链",
        "excerpt":"1、半程出行链  在大型城市中，有相当一部分出行无法基于出行链的模式进行建模，这类出行主要包含面向外部出行，从市内到市外（I2E），或从市外到市内（E2I），典型场景有：      乘坐地面交通工具前往机场乘机，当天未返回的出行；   乘坐地面交通工具前往火车站、高铁站，当天未返回的出行；I2E/E2I出行人群需要和在机场、车站工作的群体区分开，后者仍为使用出行链建模的对象群体。   正常情况下，上述类型出行的OD数据只能通过昂贵费时的拦询来进行统计。比如，传统的家访调查中，有极比例的面向外部出行数据会体现在调查结果中。 通过大数据方式（手机信令、移动互联网位置信息）采集到的数据可以挖掘出部分的面向外部出行，但对出行人的准确画像仍然是目前面临的主要技术难题。  通过对枢纽设施及邻近区域的人员活动进行统计往往是有效的，但也仅能在校核验证过程中发挥作用。   2、半程出行链模型的构建  基于出行链的建模具备较好通用性，结合经过调整的用地特征属性，使用面向特定出行目的的出行率以及对应的出行模式，辅以按目的/人群/起点地带交叉的出行时段分布参数 Wpcit ， 可以在不增加额外模型结构的情况下，对到达/离开两种半出行链（Half-Tours）进行近似模拟，主要通过以下方式实现：      基于用地的 SizeVariable 需要适当放大，以在例如枢纽场站所在的小区产生/吸引更多的出行；   面向不同类型的人群，出行率必须进行区别设定，例如，高收入家庭人群乘坐飞机的需求比普通家庭人群更高；   有独立的出行的时间分布特征，如清晨和夜间的出行量可能会比其他时段高；   半程出行应主要分为以下类型：公务出行 （Employers′business） , 游客，以及其它。（在对公务出行进行建模时须考虑特定的人群类型，主要来源有高校院所、政府机构、及企业）。   目的地选择可以基于起点，也可以基于终点，取决于出行是到达武汉还是离开武汉。   在效用计算过程中，对应的去程权重系数$$W{pci}^{o}和回程权重系数W{pci}{r}不再要求相等。用于反映现实中离开城市/到达城市的出行量不平衡的情况；以上方式对于基于家的和非基家的半程出行链均适用。 通过假设全出行链组成，该方法节省了计算能力，而无需独立计算每个Half-Tour。并且两次定向旅行的分布覆盖了整个城市，在不失一般性的情况下保持了合理平衡。 总而言之，这种用于Half-Tours的建模方法简、灵活并且高效地适应了基于出行链的建模框架。值得一提的是，它也能够应用于其他目的的Half-Tours建模， 例如，每天可能有大量的人在武汉市内进行Half-Tour的出行而又不返回住所。   重要假设：      假设每天通过场站枢纽外出的出行量及占比与每天通过枢纽场站进入市内部的出行量及占比近似  ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/half-tour/",
        "teaser": null
      },{
        "title": "方式选择",
        "excerpt":"1、方式结构  考虑到交通系统复杂、方式多样，且Logit模型较能反映政策变量（如交通方式服务水平与社会经济发展条件）对交通方式选择的影响。因此，方式划分模型选择采用Nest-Logit模型，设定个体机动化（Auto）、公共交通（Public Transport）以及慢行交通（Slow Mode）为主方式：      公共交通（Public Transport）包括公交车（Bus）、轨道（Metro）、出租车（Taxi）及网约车（TNCs）；   小汽车（Auto）包括司机（Driver）及乘客（Passenger）；   慢行交通（Slow Mode）包括步行（Walk）、自行车（Bicycle）及电动车（E-Bike）。 在主交通方式划分（Main Mode）完毕后，进行子交通方式划分（Sub Mode）。在子交通方式划分（Sub Mode）后进行轨道接驳 方式划分（Access Mode）及小汽车的收费方式划分（Tolled/Non Tolled Mode）等。      1、主方式选择模型  主方式划分模型（Main Mode）分为公共交通（Public Transport）、小汽车（Auto）和慢行交通（Slow Mode）。主方式划分模型使用的函数如下所示：         2、子方式选择模型  在主交通方式划分（Main Mode）完毕后，进行子交通方式划分（Sub Mode）。公共交通（Public Transport）分 为公交车（Bus）、轨道（Metro）、出租车（Taxi）和网约车（TNCs）。小汽车（Auto）分为司机（Driver）和乘客（Passenger）。 慢行交通（Slow Mode）分为步行（Walk）、自行车（Bicycle）、电动车（E-Bike），子方式划分函数公式如下： T_{ijpcms} =T_{ijpcm}\\frac{ e^{λ_{sub}} U_{ijpcms}}{ ∑ke^{λ{sub}} U_{ijpcms} }    经验总结      方式选择中，并列的方式，体现了他们对同一道路资源之间的竞争关系；   单层logit模型和多层logit模型的功能可选未完，待续   当logsum后的e^(lamda*U)的lamda为1则是mnl,否则为nl模型  ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/mode-choice/",
        "teaser": null
      },{
        "title": "时段划分",
        "excerpt":"时间分布选择是将全天各方式出行OD矩阵，通过时间分布系数转换为分时段出行OD矩阵的过程。时间分布选择主要用于确定分目的、分群体、分方式的交通需求特征。时间分布系数的计算方法一般有以下几种： 以不同时段运行状态下的交通量作为时间分布系数的计算依据； 根据居民出行调查数据中的出行量等，计算时间分布系数； 其它可能的时间分布系数计算方法。武汉区域及市域宏观模型将全天时间分为五个时段，即早高峰（AM，AM Peak）、午平峰（MD，MidDay）、晚高峰（PM，PM Peak）、晚平峰（EN，Evening）、夜晚（NT，Night）， 根据上述计算方法确定每一个时段的时间分布系数。具体如下： 时间分布选择： 时段 缩写 对应时段   AM 07:00-10:00   MD 10:00-16:00   PM 16:00-19:00   EN 19:00-22:00   NT 22:00-07:00 出行时段组合 5个时段，出发时段和返回时段的组合共有15种，其中，AM-AM、MD-MD、PM-PM、EN-EN、NT-NT为同一时段。 组合 AM MD PM EN NT AM * * * * * MD   * * * * PM     *...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/time-split/",
        "teaser": null
      },{
        "title": "四阶段交通模型理论",
        "excerpt":"1、基本概念 “四阶段模型”，即“出行生成（Trip Generation）”、“出行分布（Trip Distribution）”、“方式划分（Modal Split）”和“交通分配（Traffic Assignment）”四个建模步骤， 于20世纪70年代初被提出，并应用于欧美一些城市的交通规划中，如底特律、芝加哥等。它反映的是人们所要经历的一系列决策过程，包括去哪里（分布）、使用什么交通工具（方式划分），以及使用了什么路径（交通分配）。 对于大多数出行而言，四阶段模型不能真实反映出行者的实际决策行为，它规避了复杂的出行行为选择，而通过集计、可操作、可控制的研究要素，为使用相对简单的分析技术和合理的数据提供了可能。 （1）出行生成——是预测每个交通分区产生或吸引出行量的过程，及在城市区域内的“发生”的出行量；出行生成只能得到研究区域出入每个交通分区的总流量，不能得到这些流量是从哪里来或者到哪里去。 （2）出行分布——预测P-A流量的过程，即将得到交通分区的交通量分布来自或到达哪个分区； （3）出行方式划分——预测选择各种交通方式占每个P-A出行总流量的比例； （4）交通分配——将每两个交通分区之间的交通量，分配到交通网络上，产生各个路段的交通流量。 2、四阶段模型常见思路及构建过程 （1）整理和分析综合交通调查中与建立交通模型相关的社会经济、交通基础设施、交通需求等资料，收集周边地区或城市的相关规划资料； （2）将建立模型所需的人口分布、就业岗位分布、居民出行需求等资料和数据细化至模型构建所需的交通分区，并进一步分析获得建模所需的居民出行需求、流动人口出行需求等数据； （3）按“四阶段”流程，建立模型框架。根据模型模拟的结果与调查值对比，进行模型参数校正，建立基年宏观交通模型； （4）在基年宏观交通模型的基础上，输入预测年的规划方案数据，建立规划年宏观交通模型，并对规划方案进行测试分析和评估。 3、交通仿真软件 交通模型的核心是数据、算法和参数选择。作为实现交通模型算法功能的工具，目前各款交通模型软件的输入数据基本一致，理论算法也处在同一水平。因此，对各类模型软件的比选更多在于对复杂交通数据管理、计算处理和结果展示等过程的便利性、高效性。面向规划应用的模型软件要求包括： 目前，国内外常用的宏观仿真软件有：TRANSCAD、CUBE、EMME和VISUM。 仿真软件 TRANSCAD CUBE EMME VISUM 生产厂商 美国Caliper公司 美国Citylabs公司 加拿大INRO公司 德国PTV公司 运行环境 Windows，支持网络版本 Windows Windows、Unix、Linux Windows，支持网络版本 网络表达 可添加或删除节点/路段属性；无法编辑节点交叉口类型；提供3种转弯惩罚 节点/路段属性固定，不能添加或删除属性字段；可选择交叉口类型；不能表现曲线路段；提供节点转弯惩罚，但不提供掉头惩罚 固定属性有额外字段或属性用于扩展表现力 可添加或删除节点/路段属性；可选择交叉口类型；提供多种转弯惩罚 路阻函数 提供常用函数形式，用户需要通过编辑动态链接文件，才能自定义路阻函数 采用数据表形式，但由于是离散点的表达方式，函数表现比较粗糙 提供多种常用函数形式，提供专门的函数编辑模块，用户可以方便地设置函数参数 提供多种常用函数形式，用户可以方便地设置函数参数 图形分析功能 提供流量图、期望线、等时线等基本交通规划图形分析功能；整合了GIS功能 提供流量图、期望线、等时线等基本交通规划图形分析功能；整合了GIS功能 提供流量图、期望线、等时线等基本交通规划图形分析功能；整合了GIS功能 提供流量图、期望线、等时线等基本交通规划图形分析功能；整合了GIS功能...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/fourstep/",
        "teaser": null
      },{
        "title": "出行生成",
        "excerpt":"前言 出行生成的目的是预测在研究范围内每个区域所产生和吸引的出行数量。在这个阶段只分别关注出发于和结束于每个区域的出行数量，而并不将出行的起始点和目的地联系起来。 任何基于家庭的出行被认为是从家庭端产生的，任何不基于家庭的出行被认为是从起始点产生的，而任何以家庭之外的活动场所为目的地的出行被认为是被该场所吸引。 需要注意区分OD和概念和PA的概念,出行产生是建立出行数量或频率与出行者的、区域的以及交通网络的特性之间的关系 。 主要计算方法 交叉分类法:城镇区域人口按某些社会经济特征分成相对均匀的类别。然后，通过经验估计每类中每户家庭或个人的平均出行量。这样就产生一个用于预测出行产生量的查寻表。 回归模型: 通常使用两种回归方法。第一种方法使用集计到区域级别的数据，以区域的户均出行数为因变量，以平均区域特征为自变量。第二种使用家庭级别或个人级别的个体数据，以每个家庭或个人的出行量为因变量，以家庭或个人的特征为自变量。 离散选择模型:离散选择模型使用基于家庭或个人的个体数据去估计家庭或个人出行产生的概率。将这些离散的结果综合起来就可得到总的出行产生数量。### 2.1、出行产生的影响因素 出行产生 出行产生的主要影响因素 因素 例子 个人特性 性别 个人特性 年龄 个人特性 个人收入 个人特性 职业 家庭特性 家庭大小 家庭特性 车辆拥有量 家庭特性 孩子的数量和年龄 家庭特性 家庭收入 区域特性 土地使用 区域特性 居民密度 区域特性 可达性 交通网络特性 服务水平 交叉分类 一般按人群类别和出行目的的交叉分类 （1）出行率分类 出行目的：HBW,HBO,HBB,HBS,HBSP,HBESC(工作、其他、商务、购物、送孩子上学等) 拥车类型：CA,NC（有车、无车） 地带类型：type1,type2,type3 家庭结构：HI,MI,LI（高中低收入） 特殊群体：流动、暂住、学生、退休、失业、农民等 常见交叉分类类别如下： (2) 出行生成计算...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/trip_generate/",
        "teaser": null
      },{
        "title": "交通分布",
        "excerpt":"1、基本概念 交通分布位于四阶段模型的第二阶段，用于估计出行者目的地选择。 1）出行（trip）：人、货物或者车辆从起点到终点的一次移动，其具有三个基本属性： 每次出行具有起、讫两个端点； 每次出行有一定的目的； 每次出行使用一种或多种交通方式； 2）起讫点和产生和吸引点： - 起讫点：起点和终点（origin-destination）也就是OD点 - 产生和吸引点：production-attraction也就是PA点 - ex:home-work-home - home-work:起点为home,终点为work,产生端为home,吸引端为work; - work-home:起点为work,终点为home,产生端为home,吸引端为work; 3）基于家的出行（HBW,HBO），交通分布计算出来的矩阵，为PA矩阵； 4）非基于家的出行（NHBO），交通分布计算出来的矩阵，为OD矩阵 5）在进行方式选择以后，需要将PA矩阵转化为全天的OD矩阵； 2、常用方法 增长系数法：将一个已知的矩阵进行缩放得到一个 新的起讫点流量矩阵，当无法获得区域之间的距离，时间，费用时，通常采用这种方法。 综合法：该模型的输入包括一个或多个流量矩阵，一个反应区域之间的距离，出行时间或者出行费用等有关交通阻力因素的矩阵以及预测未来出行产生和吸引流量。引力模型将区域间的出行流量与交通出行的阻力因素直接关联起来。# 3、交通分布计算步骤 总体步骤（重力模型）： 阻抗矩阵+现状OD → 校准阻力函数（一般为gamma函数）； 阻抗矩阵+阻力函数参数表→ 摩擦因数矩阵or 摩擦因数对照表； （摩擦因数矩阵or 摩擦因数对照表）+ 交通生成数据→ 交通分布OD； 增长因子法介绍 将一个已知的矩阵进行缩放得到一个 新的起讫点流量矩阵，当无法获得区域之间的距离，时间，费用时，通常采用这种方法。 假设：增长因子法假设将来的OD交通量的分布形式和现有的OD表分布形式相同，在此假设的基础上预测对向区域目标年的OD交通量。 常用的方法包括： 常增长系数法； 平均增长系数法； 底特律法； 福莱特法； 福尼斯法； 优点 结构简单，实用较多，不需要交通小区之间的距离和时间； 适用于小时交通量和日交通量的预测； 对于变化较小的OD表预测效果好；...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/trip_distribution/",
        "teaser": null
      },{
        "title": "方式划分",
        "excerpt":"1、引言  交通方式划分是四阶段模型预测中的第三阶段。用于分析和预测个体或个体组群在进行某种类型的出行时，对不同运输方式的选择。一般说来，其目的是预测各出行方式所占的分额或出行数目。   交通方式是指完成交通出行所采用的交通手段，以综合交通规划为例包括：铁路、公路、水运、航空和管道；城市交通规划的交通方式包括：步行，自行车，私家车，出租车，公交车，轨道交通。   2、方式选择影响因素  2.1、交通特性      出行目的：出行目的不同，对交通服务质量要求不同；   运行时间和出行距离；   出行费用   舒适性；   安全性；   准时性；   换乘次数和候车时间；   2.2、出行者属性      职业、性别、年龄、收入   家庭属性        2.3、地区属性       居住人口密度，人口规模   交通设施水平；   地形、气候；   停车场和停车费等   2.4、出行时间特性     工作日和非工作日出行差异；   高峰和非高峰出行差异；   3、交通阻抗计算  3.1、个体出行阻抗计算  个体出行包括步行，非机动车（自行车、电动自行车）、摩托车、出租车、私家车及单位配车等，其阻抗计算如下：      3.2、公交出行阻抗计算  相比个体交通“无等候”，“零换乘”，“门到门”的特点，公共交通出行包含更多的阶段，包括前往车站，后车、换乘、下车后前往目的地等，相应的公共交通出行时间可以分为步行时间、车内时间、等车时间，等车时间。 其出行成本为： GC= Time+Fare/Vot Time = WalkT+IVTT+WaitT+BoardT+Penalty 式中：     WalkT表示步行时间；   IVTT表示车内时间；   WaitT表示等车时间；   BoardT表示登车时间；   Penalty表示换乘惩罚；   Fare为公交票价；   4、多层Logit模型      4.1、方式效用计算  4.1.1、基于不同比例的综合效用计算   不同方式的比例值，初始值由交通调查得到，后续值由模型上一次迭代计算得到。 1）不同方式(考虑接驳)出行阻抗：      4.1.2、基于logsum的综合效用计算  1）不同方式的出行阻抗：      4.2、不同方式的选择概率：     ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/mode_split/",
        "teaser": null
      },{
        "title": "PA转OD",
        "excerpt":"1、引言 基于交通分布计算得到研究范围内的PA矩阵，通过方式选择，得到了使用不同交通方式出行的PA矩阵，此时需要将PA矩阵转化为用于交通分配的OD矩阵。具体操作如下： 把产生和吸引转换为起点和终点； 将 24 小时出行矩阵分解为时段出行表； 把出行人数转化为出行车辆数； 应用高峰小时因子； 2、PA转OD过程 2.1、基于分时对照表 基于分时对照表将全日PA转化为分时段（早高峰，平峰以及晚高峰）的OD。 高峰小时模型的公式表示为： 分时对照表 | 分类 | AM | MD | PM | NT | SUM | |—|—|—|—|—|—| | HBW-BIKE-P | 0.4 | 0.07 | 0.00 | 0.02 | 0.49 | | HBW-BIKE-A | 0.01 | 0.05 | 0.36 | 0.09...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/PA2OD/",
        "teaser": null
      },{
        "title": "交通分配",
        "excerpt":"道路交通分配 1、引言 交通流分配是四阶段模型的最后一个阶段，其本质是两种机制相互作用的结果。 系统用户即各种车辆试图通过在网络上选择最佳路线来达到自身出行费用最小的目标； 路网提供给用户的服务水平与系统被使用的情况密切相关，道路上的车流量越大，用户遇到的阻力即对应的新形势阻抗越高。用一定的模型来描述两种机制及其相互作用，并求解网咯上交通流量在平滑状态下的合理分布，即交通分配模型。 1）输入要素： 出行需求OD矩阵表； 道路网络基础； 2）平稳问题 wardrop第一平衡原理：道路使用者都确切知道网络的交通状态并试图选择最短路径时，网络达到平衡状态。在考虑拥挤对行驶时间影响的网络中，当网络达到平衡状态时，每个OD对的各条被使用的径路具有相等而且最小的行驶时间，没有被使用的径路的行驶时间大于或等于最小行驶时间。 wardrop第二平衡原理：系统平衡下，拥挤的路网上的交通流应该按照平均或总的出行成本最小依据来分配。 2、交通分配方法 2.1、全有全无分配 采用全有全无分配法，O-D 对间的所有交通流都分配到 O-D 之间的最短路径上。该模型与现实不相符的地方是每个 O-D 之间只采用一条路径，即使另外的路径的出行时间或费用相同或非常接近也不采用。另外，将交通流量分配到路段上时，没有考虑路段是否有足够的通行能力或严重的交通拥堵，所输入的出行时间为固定值，不随着路段的拥堵程度而变化 。 2.2、STOCH 分配法 STOCH 分配法（Dial, 1971）是将每个 O-D 之间的交通流量分配到连接该 O-D 的多条可选路径上。分配到一条路径上的流量所占的比例是选择该路径的概率，路径的选择概率是由 logit 路径选择模型计算的。一般说来，和其他可选路径相比，时间越短的路径，被选择的概率越大。但是，STOCH 分配法并不将流量分配到所有的可选路径上，只分配某些有限的较为“合理的”路段上。一条合理的路段是使出行者离出行起点越来越远，离出行终点越来越近。在 STOCH 分配中路段出行时间输入的固定值，出行时间不随路段流量的变化而改变。因此，该模型不是一种平衡方法。 2.3、递增分配法 递增分配法是逐步分配交通流量的一种方法。在每一步分配中，根据全有全无分配法分配一定比例的总流量。每步分配后，根据路段流量重新计算出行时间。当采用的递增次数足够多时，该分配法类似于平衡分配法，但是，该方法不能保证产生平衡解。在路段流量与出行时间之间可能存在不一致，会导致方案评估计算的错误。另外，递增分配法还受到流量分配时，O-D 对的处理顺序的影响，加大了分配结果中包含进一步的偏差的可能性。 2.4、容量限制法 容量限制法试图通过循环迭代全有全无流量分配和根据反映路段通行能力的拥挤函数计算路段出行时间，来近似计算平衡解。遗憾的是，该方法不能收敛，在某些路段上可能会跳来跳去地反复分配流量（Sheffi, 1985，第 113 页）。在一些软件包中，容量限制法试图通过平均出行时间和最近迭代中一组流量的平均值来减轻这个问题 。 这种方法不仅不能收敛为一个平衡解，并且还有产生另外一个问题的可能，即其计算结果非常依赖于具体的迭代次数。多执行一次迭代或者少执行一次迭代，常常会给出截然不同的结果 2.5、用户平衡法（UE） 用户平衡法采用一个迭代过程达到平衡的结果，即出行者改变路径不可能再改进出行时间。在每次迭代中都计算路网中各路段的流量，其中考虑到路段通行能力的限制和与路段流量相关的出行时间。UE 问题的推导可以归结为一个数学规划问题，使用Frank-Wolf 方法来求解。 2.6、随机用户平衡法（SUE） 随机用户平衡法是用户平衡法的一种通用表述，它假定出行者没有完整的路网属性信息，或者他们对出行费用的感受不同。SUE...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/transport-assignment/",
        "teaser": null
      },{
        "title": "软件基本操作",
        "excerpt":"1 、参数标定 1.1 基础数据的准备 （1）各目的的综合阻抗 （2）各目的的出行矩阵（调查） （3）基于小区的PA（出行矩阵导出）在进行现状函数标定时，是分目的进行的，而不同目的的综合费用具有较大的差距，为了公平地考虑两地之间的阻抗，有两种方法，一种是以方式结构比例为权重求其加权平均值，二是对其效用取logsum。 1.2 、进行现状Gamma函数标定 1.模型暂定使用重力模型作为交通分布模型，熵模型采用Gamma函数，函数形式如下： 2.根据居调结果得到目的的PA矩阵，初步使用小汽车的自由流行驶时间最为阻抗； 3.标定Gamma函数的a、b、c参数（分出行目的，操作方法见交通需求手册-交通分布）。## 2 、结果怎么看 2.1 出行距离分布曲线 （1）曲线统计的方法 对于重力模型参数标定，标定结果的绝对数值较难分析，我们更为关注的是标定出来的阻抗函数曲线形态。 注意，在分析阻抗函数曲线的时候，横轴（GC轴）并不需要从0开始，而是应该从有出行的GC开始，即如果调查得到的出行最小GC为8min，则阻抗函数的有效区间为（8min，+∞），因此无论是对于出行距离分布曲线还是阻抗函数的分析，都应从8min开始，不然反而会影响判断。 无论对于任何人群和目的，其阻抗函数在有效作用的区间内，都应该是单调递减的。 （2）检查调查数据出行距离分布是否合理（分方式） 1.Skim出小区间的出行距离（距离最短）； 2.根据居调结果得到分方式的PA矩阵（操作方法参考UserGuide——Matrix）； 3.应用TransCAD得到调查的各方式的出行距离分布（参照菜单Trip Length Distribution 旅行长度分布）； 4.检验合理性：平均出行距离的绝对值和相对值是否合理、出行距离分布是否合理（最好将第三步的结果粘贴到Excel中检查校核），CR系数是否够大。&gt; 关于CR系数是什么：Coincidence ratios A more rigorous way of checking trip length frequency distributions is through the use of coincidence ratios. This is most...","categories": [],
        "tags": [],
        "url": "/tutorials/model/calidation/",
        "teaser": null
      },{
        "title": "软件介绍",
        "excerpt":"matsim 入门介绍 MATSim（The Multi-Agent Transport Simulation）是由柏林工业大学Kai Nagel教授及其团队开发的一款基于用户需求的开源交通仿真软件。 本指南主要用于帮助用户开始使用 MATSim。 1、什么是matsim? MatSim是一个大型的基于智能体交通运输的仿真框架，该框架允许用户根据自己需要，实现多个模块组合运行，也可以单个模型运行，甚至可以使用自定义模块替换运行。目前，Matsim由五个模块组成，初始需求，基于智能体的移动仿真，重新计划模块，迭代运行仿真的控制器，以及模块运行输出分析。对于初级用户而言，秩序参照基于样例，配置好模型的输入数据集，就可以使用Matsim的基本功能集。对于高级用户，则需要编写自己的和matsim集成的程序代码，比如提供特殊的功能和自定义功能分析。 2、matsim的特点 基于智能体的日常出行行为的多模式模拟。Matsim能够详细的模拟私人小汽车和公共交通，同时还能够支持其他模式(例如，行人和自行车等)。Matsim通常模拟大量单个个体（agent）,一整天的移动出行行为。这允许跟踪单个智能体一整天的活动，从home到work,再到leisure或shopping,最后返回到home. 支持快速的，大型的交通仿真场景MATSim 能够在具有数十万路段的网络上模拟具有数百万代理的场景。您所需要的只是一台具有足够内存的最新、快速的台式计算机。即使在这种情况下，MATSim 通常也只需要几分钟就可以模拟一整天。 多种功能分析和模拟输出MATSim 可从模拟状态中收集部分关键值并将它们输出，以便快速了解模拟的当前状态。除次以外，它还可以将模拟流量与来自现实统计的真实数据进行校核对比，并在gis地图上以交互方式显示结果。此外，MATSim 提供交通模拟的详细输出，其他应用程序可以轻松解析这些输出， 以创建您自己的特殊分析。 模块化分析方法MATSim 允许轻松替换或添加功能。这允许为智能体的出行行为添加自己的算法并将其应用到MATSim，或者使用MATSim 的重新规划功能模块，完成自定义的交通仿真模拟。 开源和跨平台MATSim支持在开源协议(GPL) 下进行开发设计，这意味着MATSim可以免费下载和使用，并可以下载完整的源代码。可以在某些限制条件下对其进行修改（有关更多详细信息，请参阅许可证）。MATSim用Java 语言开发编写，可在所有主要操作系统上运行，包括 Linux、Windows 和 Mac OS X。 广泛的开发和使用Matsim目前在全世界都应用广泛，主要包括柏林理工学院 (TU Berlin)、苏黎世的瑞士联邦理工学院 (ETH) 以及由两名前博士生创立的私人公司 Senozon 领导。其他应用开发目前主要在南非，德国，加拿大，以及世界其他地方。目前，Matsim的广泛使用不仅适合单地方的单场景，而且可以适应许多不同的场景需求。 3、Matsim的学习基础 Matsim是由java语言研发设计而成，同时主要应用于交通模拟仿真，因此必要的java语言基础和交通背景知识能更好的帮助理解模型仿真的基础原理，便于用户自定义功能更新和场景实施。 3.1、Matsim的基础资料收集 复杂版本的官方用户指导手册：multi-agent-transport-simulation.pdf 简易版本的官方用书手册：partOne-latest.pdf utube的英文入门培训视频 github讨论论坛：https://github.com/matsim-org/matsim-libs/issues matsim官网：https://www.matsim.org/ Matsim相关论文 Matsim开源数据：https://svn.vsp.tu-berlin.de/repos/public-svn/matsim/scenarios/countries/ 4、MATsim关键词 QSim...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-base/",
        "teaser": null
      },{
        "title": "下载与安装",
        "excerpt":"MATSim 没有任何易于使用的图形界面。相反，它使用文本文件进行配置，并使用命令行界面开始模拟。本章向您展示如何在许多不同的计算环境中启动 MATSim 模拟。 1、Matsim基础环境 1.1、软件基础： MATSim 在任何安装了 Java(java Standard Edition) (SE) 环境的机器上运行。 java环境下载：https://www.oracle.com/java/technologies/downloads/&gt; 注意下载低版本java,过高版本容易出bug,推荐java11; 1.2、硬件环境 较小的场景（例如教程中包含的示例），大型场景的（ 5%-10%示例）可以在普通电脑上运行，为了模拟大型场景（数十万个agent、具有数万个link和node的网络），可能需要具有大量内存 (RAM) 的高端计算机来将agent的数据保存在内存中。agent计划的描述和模拟输出可能会占用数GB的硬盘空间。为了存储多个场景的数据模拟运行的输出，可能需要大量的磁盘空间。MATSim 可以读取和写入压缩文件减少所需的磁盘空间量，但这方面仍然不应该被低估. MATSim 可以在重新规划阶段使用共享公共内存（“共享内存机器”）的多个 CPU 或 CPU 内核。为大量迭代运行大型场景可能需要几个小时，最多几天。因此，如果您计划模拟许多不同的场景，建议使用专用机器运行 MATSim。 建议： 要试用 MATSim：任何具有 1GB RAM 和 500MB 可用磁盘空间的现代笔记本电脑或台式电脑都应该是合适的。 运行大型场景（100000+ 个代理，具有 50000+ 个链接的网络）： 一台至少有 4GB RAM 和 200GB 可用磁盘空间的高端台式计算机。 运行许多大型场景，以便相互比较： \\多台高端台式计算机或服务器，至少 4GB RAM，共享一个公共存储磁盘（至少...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-run/",
        "teaser": null
      },{
        "title": "Matsim配置",
        "excerpt":"想要Matsim正常运行，至少需要一个基础网络，一个出行需求，在这个基础上，再加上一个配置文件。除此以外，可以添加其他附加和可选输入数据。 1、Matsim数据配置基础 MATSim 使用多个文件来存储用于模拟的不同类型的数据。典型输入数据集： config.xml：Matsim的配置选项 network.xml：道路网络描述 population.xml：出行需求，agent对象及日出行计划 facilities.xml：活动点相关位置信息 transitSchedule.xml：公交站点位置及公交服务信息 transitVehicles.xml：公共交通服务的车辆的描述 counts.xml：来自真实世界计数站的每小时数量以进行比较。 上述文件概述了在使用MATSim时通常会遇到的文件，但并非总是需要所有文件。非常简单的模拟只能使用配置文件和网络描述以及包含代理计划的人口来运行。对于附加功能，例如对于公共交通的模拟，可能需要额外的文件。 注意：一些文件，尤其是人口和网络文件（population.xml，network.xml或facility.xml），可能会变得非常大。为了节省空间，MATSim 支持以压缩格式读取和写入数据。 MATSim 为此使用 GZIP 压缩。因此，在许多情况下，文件名具有附加后缀tt .gz，如 population.xml.gz。 MATSim 会根据文件名自动检测文件是否已压缩或应写入压缩文件。 2、配置文件示例 2.1、配置选项文件：Configuration：config.xml 配置文件，通常简称为config.xml，在用户和 MATSim 之间建立连接。它包含影响模拟行为方式的设置列表。所有配置参数都是简单的参数名称和参数值对。参数被分组到逻辑组中。例如，有一个组具有与控制器相关的设置，例如迭代次数，或者有另一个组具有与模拟相关的设置，例如模拟的结束时间。 可用参数列表和有效参数值可能因版本而异。尽管我们试图保持稳定，但由于软件的变化，尤其是新功能的变化，设置可能会发生变化。要获取当前可用的所有可用设置的列表，请运行以下命令： java -cp matsim.jar org.matsim.run.CreateFullConfig fullConfig.xml 此命令将创建一个新的配置文件fullConfig.xml，其中包含可用参数的完整列表及其默认值。这样可以轻松查看可用的设置。要使用和修改某些设置，可以将具有相应参数的行复制到特定于要模拟的场景的配置文件中，并在该文件中修改参数值. 示例如下： &lt;?xml version=\"1.0\" ?&gt; &lt;!DOCTYPE config SYSTEM \"http://www.matsim.org/files/dtd/config_v1.dtd\"&gt; &lt;config&gt; &lt;module name=\"network\"&gt; &lt;param name=\"inputNetworkFile\" value=\"example/network.xml\" /&gt; &lt;/module&gt;...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-config/",
        "teaser": null
      },{
        "title": "Matsim原理",
        "excerpt":"1、Matsim研究内容 MATSim是一个基于活动、可扩展、多智能体的Java仿真框架，它可以在给定的交通网络上，模拟在一整天的时长内大量出行个体的出行及活动行为。matsim的主要研究内容包括： 微观交通模型：MATSim 能够对微观交通流量及其拥堵进行模拟仿真。 基于需求/智能体的微观出行行为建模：MATSim通过跟踪每日时间表和综合出行者的出行决定来描述微观出行需求。 物理计算：MATSim对10^7个或更多的”agent”进行快速的微观模拟。 复杂的自适应系统和协同进化算法：MATSim通过协同进化算法，优化整个出行时刻表，从而达到整个系统的平衡和稳定状态。MATSim是基于协同进化原理。每个智能体反复优化其日常活动时间表，同时与所有其他智能体竞争当前时空下的 交通基础设施。这有点类似于路径分配迭代选择，但是matsim在迭代循环中结合了其他选择维度（如时间选择，方式选择，或目的地选择），超越了路线分配， 2、Matsim模拟的交通流模型 MATSim提供了两个内部的移动仿真mobsim：QSim和JDEQSim（Java Discrete Event Queue Simulation）;在此外，还可以插入外部移动性模拟。几年前，DEQSim（离散事件）队列模拟）用C++编写，由Charypar（2008）描述;Charypar et al. （2007b，a， 2009）插入 MATSim 并经常使用。多线程 QSim 目前是默认的 mobsim。 不同模型在道路上的行驶行为仿真的主要区别： 物理仿真：跟车模型； 元胞自动机模型：道路被离散化为元胞 排队仿真：使用等待队列对流量动态进行建模 中观模型：综合出行者的出行速度 宏观模型：基于道路流量建模而不是单个出行个体建模matsim的交通流模型:MATSim 专为大规模场景而设计，因此它采用了基于队列的高效计算方法。从交叉路口进入网络链路（即路段）的汽车添加到等待队列的尾部。它一直保持在那里，直到自由流动的链接的时间已经过去，直到他或她在等待队列的头，直到下一个链接允许进入。It remains there until the time for traveling the link with free flow has passed and until he or she is...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-yuanli/",
        "teaser": null
      },{
        "title": "Matsim的策略",
        "excerpt":"策略描述了代理计划如何修改，因此是MATSim的重要组成部分进化优化算法   在配置文件中，策略模块已编号。此外，每个模块都有一个权重,这决定了模块所代表的行动过程的概率 采取。在代码中，策略模块始终是计划选择器和零个或多个的组合策略模块元素.      如果策略模块元素为零，则所选计划将“选定”为人，然后返回方法.   如果至少有一个策略模块元素，则复制所选计划，该副本添加到人员的计划集中，新计划被”选定”。那新的然后，计划被赋予策略模块元素以进行修改。后一种策略 模块，至少具有一个策略模块元素，有时被称为”创新”。   创新和选择器模块的区别      创新模块会选择一个方案，先copy一份，然后在这个基础上调整出新的方案，不改变原方案，会增加选择集；        选择器模块，单纯在选择集中选择方案## ReRoute模块       配置选项 ```html     ...    ```html &lt;module name=\"planscalcroute\" &gt; &lt;param name=\"beelineDistanceFactor\" value=\"1.3\" /&gt; &lt;param name=\"bikeSpeed\" value=\"4.166666666666667\" /&gt; &lt;param name=\"ptSpeedFactor\" value=\"2.0\" /&gt; &lt;param name=\"undefinedModeSpeed\" value=\"13.88888888888889\" /&gt; &lt;param name=\"walkSpeed\" value=\"0.8333333333333333\" /&gt; &lt;/module&gt;   TimeAllocationMutator时间分配突变  ","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-celue/",
        "teaser": null
      },{
        "title": "Matsim评分机制",
        "excerpt":"Good Plans and Bad Plans, Score and Utility Matsim依赖于协同进化算法，每个智能体在移动仿真中执行多个方案，并给每一个方案打分，通过维护多个方案来学习，通过修改方案来保持进化提高。整个进化过程包括下面三大部分： 移动仿真：智能体选择某个方案，通过在模型路网中进行仿真测试，也叫做网络加载 计划打分：根据每个方案在仿真测试中的结果进行打分 重新计划：主要包括如下步骤： 如果智能体的方案数量超过最大值（配置文件中定义），然后根据方案选择器（选择）删除计划，减少方案的数量，每个智能体维护的方案数量是固定的，有配置文件觉得 计划会被复制、修改，然后选择用于下一次迭代（选择集扩展、创新）。 所有其他个体人在各自的计划之间进行选择。需要注意的是，Replanning的三个步骤必须配合工作方法：计划删除步骤应删除“坏”计划，创新步骤应生成“好”计划，而选择通常应选择好计划。这里，“好”的意思是“能够在mobsim/scoring中获得高分”。幸运的是，由于其进化的概念，该方法是相当稳健的：创新步骤并不总是产生好的解决方案。但是如果一些解决方案是好的，并导致高分，也已经足够。 1、方案评价基本效用函数公式 基础方程为，方案的效用值 等于 活动效应$S(act,q) ，加上 出行效用值 S(trav,mde(q)) $。 S_{p l a n}=\\sum_{q=0}^{N-1} S_{a c t, q}+\\sum_{q=0}^{N-1} S_{t r a v, \\operatorname{mode}(q)} $S_{pln} $: 方案计划的总效用 $S_{a c t, q} $:所有活动的总效用 $S_{t r a v, mode} $:出行过程的总效用...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/matsim-Score/",
        "teaser": null
      },{
        "title": "人口合成原理",
        "excerpt":"人口合成步骤说明 1、总体流程 初始化，配置系统参数，读取输入文件； 确定region,geo,样本之间的ID对应关系； IPF运算：计算交叉类别的总量约束 权值运算：根据交叉类别总量约束计算家庭户权值 蒙特卡洛抽样：根据家庭户权值进行抽样 结果选优与输出：多次抽样根据人口数据约束指标选优 2、具体步骤 2.1 准备工作 准备工作主要是配置系统参数，具体细节在yaml文件中； 其他输入参数在csv文件中，主要包括： 样本文件：**sample.csv 边缘分布文件（控制总量文件）：**marginal.csv 映射关系文件：**maping.csv 2.2 参数读取 读取系统配置文件，读取输入文件，确认region,geo,样本ID之间的对应关系 2.3 IPF运算 样本数据中包括的是样本geo下，家庭户和个体之间的详细信息，ipf运算的主要目的是为了计算出交叉类别下的控制总量 具体计算方法如下： 将region和geo下，家庭户和个体户的控制总量的属性交叉分类; 将sample样本数据中的家庭户和个体户按照交叉类别分别统计其频次，作为初始种子seed; 依次根据region和geo下控制总量下的单个属性，调整交叉类别的频次，直至收敛； 收敛后的交叉类别频次，即交叉类别的约束总量。 example： 原始约束 IPF运算后的约束 注：household,1L,2L的意思，household表示家庭户，1L对应hhrtotals下的variable_categories的值1,2L对应rhsize下的variable_categories的值2 2.4 权值计算 根据交叉类别约束总量计算每个geo下家庭户的样本权值 具体计算方法如下： 根据region下的约束，调整家庭户的权值； 根据geo下的约束，调整家庭户的权值； 收敛之后，可得出，每个家庭户的抽样权值； example: for region_id in region_ids: # 遍历region geo_ids = self.db.get_geo_ids_for_region(region_id) # region下所有的geoID...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/pop-gen/",
        "teaser": null
      },{
        "title": "popgen-人口合成",
        "excerpt":"1、项目结构及配置参数 1.1、项目目录 |-vennv # python环境 ├─popgen2 # popgen的项目 | ├─config.py | ├─data.py | ├─draw.py | ├─ipf.py | ├─output.py | ├─project.py | ├─reweighting.py | ├─__init__.py | ├─tutorials # 项目输入参数 | | ├─WH # 武汉 | | | ├─configuration_WH.yaml # 配置文件 | | | ├─geo_sample_mapping.csv # geo和样本geo的对应关系表 | | | ├─household_marginals.csv #...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/pop-gen_use/",
        "teaser": null
      },{
        "title": "popgen文件说明",
        "excerpt":"基于popgen的文件说明 样本表 1、人表 hid pid sample_geo ptotals rptotals rpsex rpage rpwh sex page pwh 家庭户ID 个体ID 样本geoID 总人数 ragion总人数 region性别 region年龄 region流动 性别 年龄 是否是常住 2、户表 hid sample_geo hhtotals hhrtotals rhsize rtype hsize htype 家庭户ID 样本geoID 家庭总人数 ragion总户数 region家庭规模 region家庭类别 家庭规模 家庭类型 3、集体户 hid pid sample_geo rltotals ltotals 家庭户ID 个体ID...","categories": [],
        "tags": [],
        "url": "/tutorials/tranmodel/pop-gen_file/",
        "teaser": null
      },{
        "title": "软件基本操作",
        "excerpt":"Transcad是由美国Caliper公司开发的基于GIS的交通规划软件，集成了交通需求预测，公共交通需求预测等模块，并具有GIS的图形分析功能。Trancad在一些发达国家的交通规划管理行业中已经被广泛采用，并成功的运用到交通规划，设计，管理等工作中，取得了较好的收益。目前在国内较多城市交通规划专项和总体规划中得到应用。   基本概念  TransCAD 是一个用于出行需求预测的一体化而且内容全面的软件包，它三位一体，含有一大批需求建模的程序和工具，一个独特的内嵌式交通地理信息系统（GIST），和一个能够处理海量数据的关系数据库。  主要功能总结如下：     地理信息系统基本功能 ：地图生成，格式转化，数据编辑，空间计算，数据可视化；   交通规划、需求预测与分析：网络分析，出行需求模型构建，路径选择与公交分配模型等；   二次开发接口：原生编程语言GISDK，支持python,c#等二次开发；   软件界面        1）菜单栏：包括File,Edit,Map,Selection,Procedure,Networks/Patth,Route Systems,Planning,Transit,Routing/Logistics,Statistics,Window,Help。部分菜单隐藏在Procedure下。   2）快捷按钮：部分功能以工具栏的形式进行快捷响应；   3）选择集：通过鼠标选择进行选择集构建；   4）gisd控件：tools菜单栏下的gis developer’s kit选择是否激活；                       5）数据管理窗口：在一级菜单栏的map下display manager选择是否激活；显示当前工程所以图层数据。   6）数据显示窗口：可以显示地图，矩阵，表格等；   7）工具窗口：其他附带工具，包括图像放大缩小，信息查询，绘制特殊图形，距离测量等；   ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/basic/",
        "teaser": null
      },{
        "title": "数据组织与管理",
        "excerpt":"数据格式与转化  Transcad,简称TC。内置了一套GIS的信息数据库，以文件的形式进行保存，数据格式为*.dbd,支持用户进行交互式编辑和修改。其他gis格式的文件，例如shpfile,dxf等文件，支持在线显示，不支持文件编辑与修改。  支持数据格式     内置数据类型      map：TC的工程项目，包含数据组织形式，可视化效果等；   Geographic File:地理信息文件，包括点、线、面。   table:表格   matrix:矩阵   route system:公交网络tc支持点、线、面三种图层要素，不同图层之间相互独立，一个工程项目，可以由多种图层组合而成。   图层创建与编辑  创建  1）file-&gt;new-&gt;Geographic File     选择创建点、线、面对象，指定图层名称，是添加到当前map还是新的map窗口。      节点自动回生成id,longitude,latitude属性；   TC中的线层包括线和节点，每一条线一定具有起点和终点，线和点是绑定在一起的。绘制线层会自动生成节点，线默认生成id,length,dir属性，点会生成id,longitude,latitude属性。   TC中的面域自动生成id，area属性。## 编辑 点击tools-&gt;map editing-&gt;toolbox,激活编辑工具，进行编辑。               节点的编辑包括添加和删除；            线层的编辑包括添加，删除，线层打断，线层合并。          线层编辑操作设置：   绘制交叉线，自动打断，勾选line overlaps;   打断线层时，复制线层属性；   面域编辑包括生成面域，删除面域。      属性编辑与修改  激活工具栏中的info工具，点击具体需要修改的对象，进行属性修改。     ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/data_management/",
        "teaser": null
      },{
        "title": "图层数据管理",
        "excerpt":"数据添加删除与显示  添加与删除  TC支持多种数据类型进行地图展示，图层添加有两个入口；           菜单selection-&gt; selection sets-&gt;add sets            快捷键：       删除直接选中图层，点击drop set即可。     数据显示状态            多个图层可通过move up和move down进行图层叠加顺序调整；       通过show layer进行图层显示和隐藏。     选择集构建与显示      TC最优秀的功能之一，选择集的创建与显示。选择集不同于图层，选择集是从图层数据中通过条件判断筛选出来的集合，可以批量修改选择集的属性和显示效果。      选择集构建      菜单栏 selection        通过条件进行选择：select by condition     通过属性进行选择，支持逻辑判断，函数，条件等进行选择，可以设置选择集的名称，可以选择加入选择集还是新建选择集。例如：ID&gt;1000;  通过值进行选择集快速创建：select by list     非常有用的功能，例如道路网络有道路等级字段，通过该功能，自动创建不同道路等级的选择集。   通过选择集来创建选择集：combine selection      支撑并集，交集，取反等多种操作。 ​  鼠标交互创建选择集：tools下勾选seletion     支持创建属性集，属性集显示，清除。支持鼠标点选，区域选等操作。   选择集的显示           显示的三种状态：隐藏，虚显示（不显示颜色，线宽等主题），全显示（显示颜色，线宽等主题）            主题显示设置：点击图标，可以设置线型，线宽，颜色等            标签显示：激活工具栏下的标签突变       选择属性，可以选择单属性或者多属性显示（multiple fields)    ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/data_layer/",
        "teaser": null
      },{
        "title": "图层主题设置",
        "excerpt":"TC主题地图能显示地理信息数据的特征，使其特征易于识别和理解。映射主题是根据一个或多个数据字段的值对映射特性的样式。TransCAD有六种主题类型： 颜色主题 图案主题 点密度主题 饼形和条形图的主题 缩放符号主题 棱镜图TC的主题设置包括颜色主题，点密度主题，scaled symbol主题,chart 主题。在快捷方式中进行激活。 通用设置：styles styles设置有三个入口： 选择快捷栏图层工具，Layers，选择点图层 ，【该方法对图层整体进行设置】； 在菜单栏Selection下，选择Settings… ，【该方法可对图层，对选择集进行单独设置】 display manager下之间双击图层图标，都可进行style设置；【该方法对图层，对选择集进行单独设置】 双击左下角Style控件，如下 在ICONs下选择显示的图标，在size选中显示大小，在color中选择显示的颜色； 显示大小设置 通用设置中的styles是对一类选择集或者整个图层进行设置，但是偶尔我们需要根据属性值的大小进行显示。 选择待显示图层，双击scaled-symbol theme快捷方式 选择属性值，设置最大与最小显示效果 显示效果如下： 显示颜色设置 如何根据属性值来用不同颜色进行显示？ 选择待显示图层，双击颜色主题图标 选择显示的属性列，选择显示方法 显示的方法包括如下： Method Meaning   Equal number of features Each class has the same number of features. If you ask for four...","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/layer_data_theme/",
        "teaser": null
      },{
        "title": "工具",
        "excerpt":"打开属性表      直接拖拽*.bin文件进行操作窗口;   切换工作图层，点击快捷栏工具；      表结构修改           打开属性表，点击快捷栏工具，激活modify；            modify table下修改表格的字段，定义地段名称，类型。类型包括整形，浮点型，字符型。       注意：TC字段名称不限制长度，shpfile字段限制长度，当字段过长，转化为shpfile时，只保存前几列字符； TC字段类型和shpfile部分不一致； ​  属性值操作      属性值修改：直接在表格中进行修改；   点击属性列，鼠标右键进行操作               从小到大排序：sort increasing;   从大到小排序：sort decreasing   查找：find   填充：fill   填充单个值；   填充自然数列   基于公式进行填充，使用其他字段进行填充   空间填充：使用空间位置最近的其他图层的属性值进行填充               属性列设置：   当显示标签时，如果是浮点数字，可隐藏小数点后面的数。   点击column setting,format下选择12345，即不显示数字；      ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/data_table/",
        "teaser": null
      },{
        "title": "工具",
        "excerpt":"矩阵创建      file-&gt;new file        选择matrix,点击ok       选择创建一个新的矩阵         注：创建矩阵文件，需要依赖于表格或者图层，因为需要为矩阵的IDs指定对应的表格或者图层的属性列       点击OK即可。​     矩阵管理      多个矩阵管理       同一个矩阵文件下可以存放多个矩阵   点击快捷工具下图层管理，激活matix file contens;   点击add matrix，添加矩阵。   矩阵索引管理  tc允许矩阵有多套索引，点击右键，选择indices…       点击add index…，添加新的index.   矩阵统计      矩阵平均值，总和，最大值，最小值等指标统计，右键选择statistics   显示结果如下：       列指标的统计，右键，选择properties…   选择统计指标，包括总和，平均等               显示结果如下：      其他操作  矩阵其他常见的操作包括转置，聚合，导入导出等。    聚合操作      选择索引对应关系表，依赖于打开的表格和添加的图层；   选择矩阵ID索引对应的表格中的属性列；   选择需要聚合的ID对应的表格中的属性列；   导入导出      导出为三列表：               基于3列表的导入：dataview-&gt;import into matrix               选择创建新的矩阵还是更新现有矩阵的值        选择元胞填充，一次可以填充多个矩阵        指定表格名称，指定选择集，指定行列索引，待填充的矩阵   指定待填充的矩阵对应的属性列的值       点击finish,即可。     矩阵值修改       打开矩阵，可以直接赋值，粘贴。   ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/matrix/",
        "teaser": null
      },{
        "title": "工具",
        "excerpt":"道路网络模型 TC中的道路网络和EMME软件中对道路网络的方向定义不一样，体现在 EMME中的道路方向是from node ,to node的形式进行定义，道路只有一个方向。描述双向道路时，会有两条记录，from node-to node;to node-from node; TC中的道路网络含有方向字段DIR,【-1,0,1】表示逻辑方向，拓扑结构方向为from node-to node，为物理方向。 DIR=1表示逻辑方向和物理方向一致，且为单向道路,对应字段AB_*的属性列； DIR=-1表示逻辑方向和物理方向相反，为单向道路，对应字段BA_*属性列‘ DIR=0表示双向道路，即含有AB,有含有BA。 路网默认字段包括，ID，Length，Dir。## 道路网络构建 基于OSM，shpfile字段进行道路网络转换； 需要将其他格式的路网转化为TC（*.dbd）的数据格式； 注意from node与to node的转化； TC中生成线图层，会自动生成点图层进行点和线的绑定；### 基于卫星地图，进行手动绘制 需要对卫星图片的坐标调整； 道路网络编辑 见线路图层数据编辑操作 道路网络字段 常见字段如下： index 字段 物理意义   1 ID id   2 Length 长度   3 Dir 方向   4 YEAR 年份  ...","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/network/",
        "teaser": null
      },{
        "title": "空间计算",
        "excerpt":"空间tag  功能描述：GIS空间下，两个不同图层，需要将一个图层的数据填充到另一个图层的属性列。 操作方法：      打开属性表，右键选择填充fill               选择TAG功能，选择填充图层，选择图层属性列               系统会自动计算每个对象最近的另外一个图层对象的数据。     道路网属性显示起点和终点      TC中的路网含有字段DIR，表示link的逻辑方向，不会直接显示link的物理方向。from node,to node标注的是link的物理关联的节点ID，正常情况下不会正常显示。 显示方法如下：       任意选择一个字段进行填充，fill   选择Formula功能，点击node fiekds               选择节点的ID，点击both，点击ok。属性表会自动显示link的起点和终点。      属性表关联计算  功能描述：通过外部文件与TCgis文件唯一索引，将外部文件的属性填充到GIS文件中。 操作步骤：      打开GIS文件属性表，将文本文件拖拽到TC中；                    选择join功能：选择GIS文件的属性表与索引字段，选择文本文件与对应索引字段，进行拼接；        可以选择一对一，一对多等形式               点击OK，即可将两张表合并成一张表。   然后通过fill.字段计算进行填充。​     图层合并      功能需求：同一个图层中，对某列具有相同属性值的对象进行合并，形成一个新的对象，例如小区合并成中区。 操作步骤：       选择功能tools-&gt;geographic analysis-&gt;merge by value    ​ ​     其他功能：缓冲区生成，期望线生成，线层面层转化，地理空间拼接                ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/tag/",
        "teaser": null
      },{
        "title": "转向惩罚",
        "excerpt":"转向禁止设置  功能需求：  通过鼠标拾取，确定转向禁止方向  操作步骤：           点击networks/paths下，turn penalty toolbox       自动新建bin文件，点击编辑窗口下的+；   先后点击禁止转向的link，系统自动记录起点link和终点link。   最短路径生成  功能需求：鼠标点击其中和终点，自动生成最短路径  操作办法：      点击networks下的shortes path,激活shortest path 工具箱；   点击add a stop,确定起点和终点；   选择最短路径的属性，可选距离和时间   点击find the best route   页面自动显示最短路径和路径上的累加值   最小阻抗矩阵生成  功能需求：基于选择集，生成选择集之间的最短阻抗  操作办法：      创建网络：networks/paths-&gt;create…                    选择networks/paths-&gt;multiple paths       multiple  shortest path下设置：选择network,选择最短路径计算属性，选择起点选择集，选择终点选择集               点击OK，则自动生成选择集之间的最短路径计算属性累积值，矩阵值可判断交通小区之间的可达性。  ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/turn-penalty/",
        "teaser": null
      },{
        "title": "道路交通分配",
        "excerpt":"前置准备      道路网络：   属性字段完善：长度、通行能力、自由流速度与时间、延误函数参数等；   选择集构建：去除轨道等非机动车道路，构建network;   节点层：构建交通小区选择集；   需求矩阵： 矩阵索引对应于道路网络下节点编号；     分配操作      单类别分配      构建道路分配网络       networks/paths-&gt;create   创建道路分配网络network，此网络非dbd网络，而是由选择集构成的*.net网络，可根据不同条件构建面向不同需求的网络，比如说网络禁行，现状和规划年路网管理等多种场景；               点击OK，保存net文件；     单类别道路分配            点击Planning-&gt;Single Class Traffic Assignment-&gt;Traffic Assingment       根据弹窗选择分配参数   加载刚创建的网络，在路网编辑或属性修改后，必须更新；   选择分配的延误函数   选择分配方法   选择打开的矩阵文件   更新加载的网络属性，选择对应延误参数，可以选择value下的默认参数   选择迭代次数   分配结果保存      选择分配结果保存位置   多类别分配  创建道路分配网络      操作方法同上     多类别道路分配       planning-&gt;Multii Class Traffic Assingment-&gt;Multi-Model Multi-Class Assingment…               参数属性选择   分配网络   分配方法   需求矩阵   延误函数   不同类别的时间价值   不同类别的道路收费，通过setting进行设置   不同类别的禁行区域   延误函数参数选择   迭代次数选择        分配结果保存                ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/traffic_assignment/",
        "teaser": null
      },{
        "title": "公交分配",
        "excerpt":"TransCAD 提供一整套的工具和程序来创建和使用公交网络。 公交分配程序用来预测出行者在面对各种到达目的地的路径时所做的路径选择。在出行需求预测过程中，公交分配经常在模式选择模型运行之后执行。 ​ 公交分配方法 TransCAD 提供六种公交分配方法，包括三种核心方法和其他三种用以模拟其它软件结果的方法。其核心方法如下：• All–or-nothing （全有全无）• Pathfinder（路径搜索）• Stochastic User Equilibrium（随机用户平衡） 。 | 分类方法 | 核心原理 | 使用类型 | |—|—|—| | AON | | 不适用大城市系统，可用于城市间的稀疏网络和模拟某类类型的货运系统 | | Pathfinder | | 使用更方便，计算速度更快 | | SUE | | 比较复杂，只适合高级用户 | ​ 公交分配结果 公交分配程序有7个可选的输出结果。 关键(选择)路段分析结果矩阵，它表明了使用特定一段公交路线的 O-D 对。 上车和下车计数表，它表明了在每个公交车站的上下车乘客数。 每个公交走廊的合并的乘客量数据，它含有共用一条道路的所有路线的合成信息。 带流量网络的路径属性计算矩阵，用它来估计每对 O-D...","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/transit-assignment/",
        "teaser": null
      },{
        "title": "卫星地图显示",
        "excerpt":"场景  TC显示在线卫星地图，页面刷新慢，可叠加下载的离线地图进行显示。 ​  卫星地图下载      可通过全能地图下载器进行数据下载   截图导航路网等   建议图片保存为jpg格式，TC不支持png格式​     TC导入卫星地图       添加jpg文件到TC的工程项目（注：需要删除原有的jpg其他格式文件，例如：jgw,xml等），不做任何坐标设置；   切换到新添加的图片图层，选择tools-&gt;toolbox-&gt;imagery-&gt;registration         添加控制点，至少选择3个控制点                    添加真实点，选择true location，拾取路网真实坐标，        点击register,则可以调整图片坐标。  ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/image_register/",
        "teaser": null
      },{
        "title": "select link",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/select_link/",
        "teaser": null
      },{
        "title": "gisdk开发",
        "excerpt":"简介 GISDK（Geographic Information System Development Kit）是TransCAD提供的一个强大的二次开发工具包，旨在帮助开发者在TransCAD平台上扩展功能、实现自动化和提升效率。它提供了丰富的API、组件和工具，允许开发者快速构建和部署地理信息系统（GIS）相关应用程序。 主要功能 交通模型库和GIS函数库：GISDK提供了丰富的交通模型和GIS函数库，支持复杂的地理空间分析和地图操作。 创建Add-Ins：开发者可以创建插件（Add-Ins），实现TransCAD的批量自动化操作，提升工作效率。 空间数据分析：支持空间数据的管理、查询、编辑和分析，包括缓冲区分析、叠加分析、路径分析等。 地图渲染与可视化：支持矢量和栅格地图的渲染，提供丰富的图层控制和渲染选项。 用户界面设计：提供丰富的UI组件，如地图控件、工具栏、图例和属性表，支持快速构建交互式的GIS应用界面。​ GISDK编辑环境配置 GISDK编译执行流程 文本编辑器编辑GISDK程序，参考GISDK语法； TC下通过tools下的开发者模式打开开发工具； 通过compile，加载程序文件（*.rsc）, 如果有语法错误则编译不通过； 通过test，执行程序文件中的macro函数; 配置Notepad++自定义编码 语言-&gt;自定义语言-&gt;自定义语言格式 格式设置 1：自定义语言新建与命名； 2：忽略编码大小写，设置扩展名； 层次设置于默认格式 设置默认的格式：字体，粗细，倾斜，前景色和背景色 设置折叠注释样式：折叠函数（macro-endmacro）,逻辑折叠（if -else),do-end 关键词列表 #TITLE=GISDK ; GISDK syntax file. ; This file is required for EditPlus to run correctly. ; This is Modified by Jandy,...","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/gisdk/",
        "teaser": null
      },{
        "title": "gisdk调试",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/gisdk-dubug/",
        "teaser": null
      },{
        "title": "基于bat调用gisdk",
        "excerpt":"基于RSCC编译程序将GISDK文件编译为可执行文件 单个文件编译 \"C:\\Program Files (x86)\\TransCAD\\rscc.exe\" -c -u \"G:\\gisdk.dbd\" \"G:\\MacroList_v2.rsc\" 多个文件编译 list文件为文本文件，记录了所有rsc文件的绝对位置，编译需要添加@ \"C:\\Program Files (x86)\\TransCAD\\rscc.exe\" -c -u \"G:\\gisdk.dbd\" \"@G:\\MacroList_v2.LST\" 编译文件执行 a：可执行文件位置 ai： 待执行的宏命令函数 n：表示软件窗口名称 ```plain “C:\\Program Files (x86)\\TransCAD\\tcw.exe” -a “G:\\gisdk.dbd” -ai “Model_Main” -n “Transport Model” # 批文件执行 ```plain \"C:\\Program Files (x86)\\TransCAD\\rscc.exe\" -c -u \"G:\\gisdk.dbd\" \"@G:\\MacroList_v2.LST\" pause \"C:\\Program Files (x86)\\TransCAD\\tcw.exe\" -a \"G:\\gisdk.dbd\"...","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/bat-gisdk/",
        "teaser": null
      },{
        "title": "基于python调用gisdk",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/tutorials/transcad/python-gisdk/",
        "teaser": null
      },{
    "title": "About",
    "excerpt":"This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at jekyllrb.com You can find the source code for Minima at GitHub: jekyll / minima You can find the source code for Jekyll at GitHub: jekyll...","url": "http://localhost:4000/about/"
  },{
    "title": "关于",
    "excerpt":"交通行业从业十年，精通多款交通规划软件和交通模型与仿真业务，擅长python数据分析。 职业经历 时间段 雇主公司 职位 2018 ~ 至今 深城交 模型与仿真 项目经历 时间段 项目名称 描述       技能 分类 技能 熟练程度 编程语言       python ⭐️⭐️⭐️⭐️⭐️   C/C++ ⭐️⭐️⭐️   js/css ⭐️   嵌入式系统 ⭐️⭐️⭐️   cv ⭐️⭐️⭐️️ 软件工具       transcad ⭐️⭐️⭐️⭐️⭐️   emme ⭐️⭐️⭐️⭐️⭐️   qgis...","url": "http://localhost:4000/about/"
  },{
    "title": "分类",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "标签",
    "excerpt":" ","url": "http://localhost:4000/tags/"
  },{
    "title": "交通专题库",
    "excerpt":"该栏目收录交通方向相关的知识库，供交通方向的人研究和学习。 ActivitySim aequilibrae matsim DTALite libcity OSM2GMNS 活动链交通模型 ActivitySim ActivitySim ActivitySim 是一个专注于交通行为建模的开源Python工具，主要用于模拟人类日常活动和出行选择，为城市交通规划、政策评估等提供数据支持。 核心功能与定位： 基于活动进行建模，通过离散选择模型和时间序列分析，模拟个体在不同场景下的活动安排（如工作、休闲）及出行方式选择（如驾车、公交）。其模型框架支持从个人到城市级的复杂行为模拟，能够处理大规模数据集。 政策情景分析，工具支持多情景对比，例如评估交通限行政策对出行模式的影响，或分析新建地铁线路的潜在需求。用户可通过定义不同参数快速生成对比结果。 技术特点： 开源与可扩展性，由大都市规划组织（MPO）联盟主导开发，采用最佳软件工程实践，代码透明且支持社区贡献。用户可自定义模型模块，例如添加新的效用函数或地理数据处理逻辑。 高效计算能力，通过多线程优化和并行计算实现快速模拟，即使处理数百万人口的数据也能在标准硬件上高效运行。例如，某案例对以色列特拉维夫 360 万人口的模拟耗时不到 1 小时。 集成化工具链，提供从数据预处理到结果可视化的完整流程支持，内置与 GIS 工具的兼容接口，并可与其他交通建模工具（如 TransModeler）无缝协作。 典型应用场景： 城市规划：优化交通网络设计，预测新建区域出行需求。 政策评估：量化碳排放政策、拥堵收费等对居民行为的影响。 学术研究：支持交通行为学、城市经济学等领域的模型验证与创新。 四阶段交通模型与交通分配算法 aequilibrae Aequilibrae 是一款专注于交通需求建模的开源工具，旨在为交通规划、城市研究及政策分析提供灵活、透明的解决方案。其名称源自拉丁语“平衡”（aequilibrium），强调对交通网络供需关系的建模能力。 核心功能与定位： 四阶段交通需求建模：支持传统交通规划中的经典四阶段法（交通生成、分布、方式划分、路径分配），可处理复杂的网络拓扑和多模式交通（如公交、小汽车、步行）。 动态交通分配：提供静态和动态交通流模拟功能，例如基于用户均衡（User Equilibrium）或系统最优（System Optimal）的路径分配，支持拥堵效应分析。 网络分析工具：内置最短路径算法、可达性分析、OD矩阵处理等模块，适用于交通网络优化（如新增道路的影响评估）。 GIS集成与可视化：兼容地理信息系统（GIS）数据格式（如Shapefile、GeoJSON），支持通过地图直观展示交通流量、路径选择等结果。 技术特点： 开源与跨平台，基于 Python 开发，代码托管在 GitHub，支持 Windows、Linux 和 macOS。用户可自由修改模型逻辑或扩展功能。 高性能计算，通过优化算法（如并行计算）处理大规模交通网络，支持百万级节点和OD矩阵的高效运算。...","url": "http://localhost:4000/theme/"
  },{
    "title": "工具",
    "excerpt":"个人开源工具          图片定制化工具              支持图片大小定制，修改图片像素大小       支持添加水印，添加文字，设置文字颜色和位置       rgb转灰度图像                openmatrix viewer              读取OMX矩阵，并可视化；       计算矩阵的和，平均值，行列的最大最小值       对矩阵进行聚合操作           个人开发工具     基于AI算法的视频检测工具AI_Perspective            基于视频、图片的样本标注       基于自定义标注的样本集进行训练       基于训练的模型进行视频检测           资源下载   ","url": "http://localhost:4000/tools/"
  },{
    "title": "技术教程",
    "excerpt":"                                                                                                                     Python入门基础                                                    python环境配置，项目管理，版本控制等入门基础与系统开发常用功能总结。                                                   开始学习                                                                                                                                                    交通规划软件Emme使用                                                    本教材是对之前使用Emme4的技术总结，由【入门篇、进阶篇、高级篇和应用篇】四个章节组成。                                                   开始学习                                                                                                                                                    交通规划软件Transcad使用                                                    由【入门篇、进阶篇、高级篇和应用篇】四个章节组成，简述TransCAD应用。                                                   开始学习                                                                                                                                                    交通模型技术总结                                                    由【四阶段模型、出行链模型、活动链和智能体模型】四部分组成，交通模型理论基础。                                                   开始学习                                        ","url": "http://localhost:4000/tutorials/"
  }]
