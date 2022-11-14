---
title: NVIDIA Joins the QIR Alliance as the Effort Enters Year Two
date: Created
summary: NVIDIA joins the QIR Alliance steering committee and recap of year one
tags:
  - news
  - organization
---

After its
[formation](https://www.linuxfoundation.org/press/press-release/new-quantum-intermediate-representation-alliance-serves-as-common-interface-for-quantum-computing-development)
a year ago under the Linux Foundation’s Joint Development Foundation for the
development of Open Standards, the QIR Alliance is welcoming NVIDIA as the
newest addition to the steering committee. NVIDIA is joining Microsoft, Oak
Ridge National Laboratory, Quantinuum, Quantum Circuits Inc., and Rigetti
Computing (in alphabetical order) in their effort to develop specifications to
facilitate integration of quantum programming frameworks with current and future
heterogenous quantum processors.

Following last year’s initial demonstrations at Q2B (recording available
[here](https://www.qir-alliance.org/resources/)), the QIR Alliance is continuing
and expanding its investment into enabling multi-processor systems capable of
leveraging both classical and quantum resources.

“Quantum computing has the potential to help solve some of the world’s most
important problems. Realizing its promise is going to require optimizing the
interface between quantum and classical computing to make quantum computing
accessible to domain scientists and enable developers to make use of the best
tools from both the quantum and classical worlds. NVIDIA is joining the steering
committee for the QIR Alliance because it shares the goal of facilitating
interoperability throughout the quantum ecosystem and providing a unified
platform to leverage today’s limited quantum processing capabilities as well as
more powerful systems of the future.” said Alex McCaskey, Senior Quantum
Computing Software Architect at NVIDIA.

To that effect, NVIDIA recently introduced
[QODA](https://developer.nvidia.com/blog/introducing-qoda-the-platform-for-hybrid-quantum-classical-computing/)
to enable programming of quantum processing units (QPUs), GPUs, and CPUs in one
system. The programming framework leverages QIR to connect to various quantum
backends, like a range of other efforts that were presented in the bi-weekly
[community calls](https://www.qir-alliance.org/resources/) organized by the QIR
Alliance and hosted on the [Unitary Fund
Discord](https://discord.com/invite/JqVGmpkP96).

“QIR makes Rigetti QCS more powerful and accessible to our partners and
customers, allowing them to easily use the programming language and the tools
they prefer. We look forward to supporting more advanced programs and runtimes
for QIR as the specification and the community grow.” said Kalan Snyder,
Director of Software Engineering, Rigetti.

To accelerate integration efforts across front- and backend providers, the QIR
Alliance has recently concluded its first major workstream to define a formal
specification for a [Base
Profile](https://github.com/qir-alliance/qir-spec/blob/main/specification/under_development/profiles/Base_Profile.md)
that captures the common denominator supported across all platforms. The
workstream consisted of 16 people from 11 different companies and organizations
(IBM, Lawrence Berkeley National Laboratory, Microsoft, NVIDIA, Oxford Quantum
Circuits, Pasqal, QFrance, Quantinuum, Quantum Circuits Inc., Quantum Machines,
Rigetti Computing).

“QIR is becoming a lingua franca for quantum computing just like LLVM is for the
classical. Building on LLVM basis, QIR reduces the amount of effort quantum
hardware and software providers spend on ensuring interoperability while
allowing end users to program in a language of their choice. Quantinuum intends
to support native QIR quantum job execution on the H-series hardware soon after
the Base Profile is released including state of the art quantum optimization
passes provided by TKET. We are excited about the future of QIR-enabled quantum
ecosystem.” said Alexander Chernoguzov, Chief Engineer, Quantinuum.

A subsequent workstream to define a more advanced profile that includes support
to express adaptive programs is scheduled to launch later this year. To
facilitate service integration of hardware backends as well as simulation tools
for research and development, an ongoing workstream proceeding in parallel takes
first steps towards formalizing the interaction and data exchange between a
runtime environment and various accelerators.

“For Quantum Circuits Inc., QIR provides a flexible and comprehensive solution
for the representation of hybrid quantum-classical applications that can be
executed on our quantum simulators and hardware backends. The ability of QIR to
capture all aspects of hybrid computation, including classical computation
embedded within a quantum program, allows us to expose our unique hardware
capabilities to users via multiple quantum programming language environments.”
said Andrei Petrenko, Head of Product, QCI.

More information about ongoing workstreams can be found on the [GitHub org
page](https://github.com/qir-alliance). In addition to facilitating discussions
between industry leaders in the form of workstreams and community forums, the
QIR Alliance also promotes a dialogue with the research community. Research to
accelerate the development of sustainable and scalable quantum computing
architectures is a vital part of the effort.

“ORNL is developing new tools to support quantum computing research, including
compilation workflows for a diversity of quantum hardware systems. Open
development of QIR provides a clear focal point to advance these goals and
encourage the best research.” said Travis Humble, Deputy Director of Energy’s
Oak Ridge National Laboratory, Oak Ridge National Laboratory.

A similar sentiment is also shared by Wim van Dam, who recently gave the keynote
on “Azure Quantum and the Road to Scalable Quantum Computing” at the [IEEE
Quantum Week 2022](https://qce.quantum.ieee.org/2022).

“We support openness, and this extends to the QIR Alliance and Microsoft’s role
as a steering committee member. Azure Quantum leverages QIR to unlock new hybrid
quantum computing capabilities – specifically, integrated hybrid quantum
computing – and deliver our recently announced quantum resource estimator. Both
technical innovations accrue to Azure Quantum’s aim to enable researchers to
scale their quantum solutions.” said Wim van Dam, Microsoft.

Also part of the Quantum Week was the second edition of the
[workshop](https://www.qir-alliance.org/posts/QCE22_workshop/) on Progress and
Challenges in Quantum Intermediate Representations. The workshop spawned
fruitful discussions across three sessions covering cross platform programming
approaches, code transformations and analysis, and interfacing with physical
architectures.

“We are excited about the progress we have achieved and are proud of how the
effort has grown over the past year. We hope that our work provides a foundation
and venue for exchange and collaboration across the industry, research, and the
open-source community. We are grateful to be working with a diverse set of
thought leaders, innovators, and contributors, and are looking forward to
continuing our work as we enter year two of this effort. “, said Bettina Heim,
Chair of the QIR Alliance.

For more information about the QIR Alliance, its organization, and how to
contribute, visit [qir-alliance.org](https://www.qir-alliance.org/).
